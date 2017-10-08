

const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {
    url : 'mongodb://pranjal007:speak1234@ds113785.mlab.com:13785/patientdirectory',
    secret : crypto,
    dbname : "patientdirectory"
}

