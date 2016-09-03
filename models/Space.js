var mongoose = require('mongoose'),
        Schema = mongoose.Schema,
        autoIncrement = require('mongoose-auto-increment');
var SpaceShema = mongoose.Schema({
    space_id: Number,
    name: {type: String, unique: true},
    description_min: String,
    description: String,
    logo: String,
    adress: String,
    contact: String,
    type: String,
    schedule: String,
    likes: Number,
});

var Space = mongoose.model('Space', SpaceShema);
SpaceShema.plugin(autoIncrement.plugin, {model: 'Space', field: 'space_id'});
module.exports ={
    model : Space,
}


