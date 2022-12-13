const userService = require("../services/user");
const sessionService = require("../services/session")
const { generateTokens, getSessionId } = require("../helpers/token");
const { validPassword } = require("../helpers/validators");
const db = require("../helpers/db");

const createUser = async (req, res) => {
  try {
    const user = await db.transaction(async (transaction) => {
      const user = await userService.createUser(req.body, transaction);
      const tokens = await generateTokens({ ...user.dataValues }, transaction);
      res.append('x-access-token', tokens.accessToken)
      res.append('x-refresh-token', tokens.refreshToken)

      return user
    });

    return res.send({
      success: true,
      message: "SUCCESSFULLY CREATED USER",
      data: user,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).send({
      success: true,
      message: err?.name ? err.name : "FAILED TO CREATE USER",
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const user = await userService.findUser({ Email: req.body.Email });
    if (user) {
      if (validPassword(req.body.Password, user)) {
        const tokens = await generateTokens({ ...user.dataValues });
        res.append('x-access-token', tokens.accessToken)
        res.append('x-refresh-token', tokens.refreshToken)
        return res.send({
          success: true,
          message: "SUCCESSFULL LOGIN",
          data: user,
        });
      } else {
        return res.status(401).send({
          message: "PASSWORD INCORRECT",
        });
      }
    } else {
      return res.status(401).send({
        message: "NO SUCH USER FOUND",
      });
    }
  } catch (err) {
    return res.status(400).send({
      success: true,
      message: err?.name ? err.name : "FAILED TO CREATE USER",
    });
  }
};

const logoutUser= async (req, res) => {
  try {
    if (req?.user) {
      const SessionId = await getSessionId(req.headers['x-refresh-token'])
      await sessionService.deleteSession({ Id: SessionId })
      return res.send({
        success: true,
        message: "SUCCESSFULL LOGOUT",
      })
    } else {
      throw new Error("NO USER AUTHENTICATED")
    }
  } catch (err) {
    console.log(err)
    return res.status(400).send({
      success: false,
      message: err?.name ? err.name : "FAILED TO LOGOUT USER",
    });
  }
}

const checkUserAuthentication = async (req, res) => {
  try {
    return res.send({
      success: true,
      data: req.user
    })
  } catch (err) {
    console.log(err)
    return res.status(400).send({
      success: false,
      message: err?.name ? err.name : "FAILED TO LOGOUT USER",
    });
  }
}
module.exports = {
  createUser,
  loginUser,
  logoutUser,
  checkUserAuthentication,
};
