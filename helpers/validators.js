const crypto = require('crypto')

const validPassword = (password, user) => {
  const hash = crypto.pbkdf2Sync(password, user.Salt, 1000, 64, `sha512`).toString(`hex`)
  return user.Hash === hash
}

const createPassword = (password) => {
  const salt = crypto.randomBytes(16).toString('hex')
  const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, `sha512`).toString(`hex`)
  return {
    Salt: salt,
    Hash: hash,
  }
}

module.exports = {
  validPassword,
  createPassword,
}
