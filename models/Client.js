var mongoose = require('mongoose'),
        Schema = mongoose.Schema,
        autoIncrement = require('mongoose-auto-increment');
var ClientShema = mongoose.Schema({
    client_id: Number,
    facebook_user : String,
    pseudo:String,
    sexe:String,
    photo:String,
    authorisation_type:String,
    about:String,
});

var Client = mongoose.model('Client', ClientShema);
ClientShema.plugin(autoIncrement.plugin, {model: 'Spetial_Event', field: 'client_id'});






