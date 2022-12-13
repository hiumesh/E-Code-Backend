const jwt = require('jsonwebtoken')
const sessionService = require('../services/session')

const accessTokenOptions = {
  algorithm: 'RS256',
  expiresIn: '60s',
  subject: 'ACCESS_TOKEN',
}
const refreshTokenOptions = {
  algorithm: 'RS256',
  subject: 'REFRESH_TOKEN',
}


const generateTokens = async (user, transaction) => {
  try {
    const session = await sessionService.createSession(user, transaction)
    const accessToken = jwt.sign(user, process.env.PRIVATE_KEY, accessTokenOptions)

    const refreshTokenPayload = {
      User: user,
      SessionId: session.Id,
    }
    const refreshToken = jwt.sign(refreshTokenPayload, process.env.PRIVATE_KEY, refreshTokenOptions)

    return { accessToken, refreshToken }
  } catch(err) {
    throw err.name ? err : new Error("FAILED TO GET TOKEN")
  }
}

const generateAccessToken = async (refreshToken) => {
  try {
    const payload = jwt.verify(refreshToken, process.env.PUBLIC_KEY)
    const session = await sessionService.findSession(payload.SessionId)
    if (session) {
      return { token: jwt.sign(payload.User, process.env.PRIVATE_KEY, accessTokenOptions), user: payload.User }
    }
    throw new Error("SESSION EXPIRED LOGIN AGAIN")
  } catch(err) {
    throw err?.message ? err : new Error("FAILED TO GENERATE TOKEN")
  }
}

const verifyAccessToken = async (accessToken, refreshToken) => {
  try {
    const payload = jwt.verify(accessToken, process.env.PUBLIC_KEY, { ignoreExpiration: false })
    return { user: payload }
  } catch(err) {
    if(err.name === 'TokenExpiredError'){
        return await generateAccessToken(refreshToken)
    }
    throw err.name ? err : new Error("FAILED TO GENERATE TOKEN")
  }
}


const getSessionId = async (refreshToken) => {
  try {
    const payload = jwt.verify(refreshToken, process.env.PUBLIC_KEY)
    return payload.SessionId
  } catch(err) {
    throw err?.message ? err : new Error("FAILED TO GENERATE TOKEN")
  }
}

module.exports = {
  generateTokens,
  generateAccessToken,
  verifyAccessToken,
  getSessionId,
}
