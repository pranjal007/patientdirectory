const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {
  uri: process.env.databaseUri, // Databse URI and database name
  secret: crypto, // Cryto-created secret
  db: process.env.databaseName // Database name
}
