// Basic required imports
var os = require('os');
var http = require("http");
var locale = require('locale');
var supported = ["en", "en_US", "ja"];
var defa = "en";
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
//Create instance of express
var app = module.exports = express();
app.use(locale(supported, defa))
app.use(bodyParser.json());
app.use(cors());
//Return json formatted for date
app.get('/who', function(req,res,next){
    res.header("Content-Type", "text/plain")
    var osType = os.type();
    var osVersion = os.release();
    var myOs = osType + " " + osVersion;
    var ip = require('ip');
    var myIp = ip.address();
    var myLang = req.locale;
    res.json({IP: myIp, language: myLang, OS: myOs});
});
app.listen(process.env.PORT || 5000, function(){
    console.log('Working');
});