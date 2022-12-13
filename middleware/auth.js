const { verifyAccessToken } = require('../helpers/token')

const checkAuth = async (req, res, next) => {
  try {
    const accessToken = req.headers['x-access-token']
    const refreshToken = req.headers['x-refresh-token']

    const verifiedUser = await verifyAccessToken(accessToken, refreshToken)
    if (verifiedUser?.user) {
      if (verifiedUser?.token) res.set('x-access-token', verifiedUser.token)
      req.user = verifiedUser.user
      next()
    } else {
      res.status(401).send({
        message: "You do not have valid token please login again!"
      })
    }
  } catch(err) {
    if (err?.message == 'SESSION EXPIRED LOGIN AGAIN') {
      res.status(401).send({
        message: "SESSION EXPIRED LOGIN AGAIN!"
      })
    } else {
      res.status(400).send({
        message: err?.name ? err.name : err.message
      })
    }
  }
}

module.exports = {
  checkAuth,
}
