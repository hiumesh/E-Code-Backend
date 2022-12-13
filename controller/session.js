const sessionService = require('../services/session')

const findAllUserSessions = async (req, res) => {
  try {
    const sessions = await sessionService.findSessions({ UserId: req.user.Id })
    return res.send({
      success: true,
      data: sessions
    })
  } catch(err) {
    return res.status(400).send({
      success: true,
      message: err?.name ? err.name : "FAILED TO FEATCH ALL USER SESSIONS",
    })
  }
}

const destoryUserSession = async (req, res) => {
  try {
    const session = await sessionService.deleteSession({ Id: req.body.SessionId, UserId: req.user.Id })
    return res.send({
      success: true,
      data: session
    })
  } catch(err) {
    return res.status(400).send({
      success: true,
      message: err?.name ? err.name : "FAILED TO DELETE USER SESSIONS",
    })
  }
}

module.exports = {
  findAllUserSessions,
  destoryUserSession,
}
