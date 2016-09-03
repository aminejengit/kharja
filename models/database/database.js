var config=require('./../../conf/config.json');
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    autoIncrement = require('mongoose-auto-increment');
// connecter la base de donné
mongoose.connect(config.connectionString); 
var connection = mongoose.createConnection(config.connectionString);
autoIncrement.initialize(connection);
// tester la base de donné

var db = mongoose.connection ;                                                          
db.on('error', function () { 
console.log('db connection errr'); 
});
db.on('open', function () { 
console.log('*** db open ***'); 
});   

