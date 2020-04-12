const Connection = require('../database/Connection')

module.exports = async (id) => {
  try {
    const query = `DELETE FROM ` +
                    `accounts ` +
                  `WHERE ` +
                    `id = ${id}`

    await Connection(query)

    return true
  } catch (err) {
    return false
  }
}