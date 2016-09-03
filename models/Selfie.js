var mongoose = require('mongoose'),
        Schema = mongoose.Schema,
        autoIncrement = require('mongoose-auto-increment');
var SelfieShema = mongoose.Schema({
    selfie_id : Number,
    event_id: Number,
    client_id: Number,
    space_id: Number,
    date :Date
});

var Selfie = mongoose.model('Selfie', SelfieShema);
SelfieShema.plugin(autoIncrement.plugin, {model: 'Selfie', field: 'selfie_id'});


