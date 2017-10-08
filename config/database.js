
/*const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {
  uri: process.env.databaseUri, // Databse URI and database name
  secret: crypto, // Cryto-created secret
  db: process.env.databaseName // Database name
}*/

/*
const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {
    url : "mongodb://localhost:27017/patientui",
    secret : crypto,
    dbname : "patientui"
}
*/

const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {
    url : 'mongodb://pranjal007:speak1234@ds113785.mlab.com:13785/patientdirectory',
    secret : crypto,
    dbname : "patientdirectory"
}


//mongodb://<dbuser>:<dbpassword>@ds113825.mlab.com:13825/patientui