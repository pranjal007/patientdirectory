const patient = require('../models/patient');	
const config = require('../config/database');

module.exports = (router) => {       

    router.post('/register', (req, res) => {
        console.log("in validation");
        if (!req.body.email) {
      res.json({ success: false, message: 'You must provide an e-mail' }); 
    } else {
        console.log("inside mongoose save");
          let user = new patient({
            email: req.body.email.toLowerCase(),
            firstname: req.body.firstname.toLowerCase(),
            lastname: req.body.lastname.toLowerCase(),
            age: req.body.age,
            DOB: req.body.DOB,
            gender: req.body.gender,
            phone: req.body.phone,
            freetext: req.body.freetext,
            date :Date()
          });
          console.log(req.body);
          user.save((err) => {
            if (err) {
                res.json({ success: false, message: err }); 
            } 
            else {
              res.json({ success: true, message: 'Account registered!' }); 
            }
          });
    }
  });


router.get('/checkEmail/:email', (req, res) => {
    if (!req.params.email) {
      res.json({ success: false, message: 'E-mail was not provided' });
    } else {
      patient.findOne({ email: req.params.email }, (err, user) => {
        if (err) {
          res.json({ success: false, message: err });
        } else {
          if (user) {
            res.json({ success: false, message: 'E-mail is already taken' }); 
          } else {
            res.json({ success: true, message: 'E-mail is available' }); 
          }
        }
      });
    }
  });


router.get('/details', (req, res) => {
    patient.find({},(err, user) => {
      if (err) {
        res.json({ success: false, message: err }); 
      } else {
        if (!user) {
          res.json({ success: false, message: 'User not found' }); 
        } else {
          res.json({ success: true, user: user });
        }
      }
    });
  });

    router.get('/patientdetail:value', (req, res) => {
    if (!req.params.value) {
      res.json({ success: false, message: 'No username was provided' }); 
    } else {
    patient.find({firstname:{"$regex": "^"+req.params.value, "$options": "i"}  },(err, user) => {
      if (err) {
        res.json({ success: false, message: err }); 
      } else {
        if (!user) {
          res.json({ success: false, message: 'User not found' }); 
        } else {
          res.json({ success: true, user: user });
        }
      }
    });
    }
  });

	return router;
}