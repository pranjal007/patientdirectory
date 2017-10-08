const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
mongoose.Promise  = global.Promise;	
const config = require('./config/database');
const path = require('path');
const validation = require('./routes/validation')(router);
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 8080;



mongoose.connect(config.url,(err)=>{
    if(err){
        console.log("Could not connect to the database" + err);
    }else{
        console.log("Connected to database "+ config.dbname);
    }
});



app.use(cors({ origin: 'https://localhost:3000' }));
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());
app.use(express.static(__dirname+'/public'));
app.use('/validation',validation);

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.listen(port, () => {
  console.log('Listening on port ' + port + ' in ' + process.env.NODE_ENV + ' mode');
});
