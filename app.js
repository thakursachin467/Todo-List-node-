var express= require('express');
var app= express();
var mongoose = require('mongoose');
var config=require('./config');
var setupcontroller =require('./controllers/setupcontroller');
var apicontroller= require('./controllers/apicontroller');


var port= process.env.PORT ||3000;
app.use('/assests',express.static(__dirname +'/public'));

app.set('view engine','ejs');



setupcontroller(app);
apicontroller(app);
mongoose.connect(config.getDbconnectionstring());





app.listen(port);
