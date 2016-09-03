var mongoose = require('mongoose'),
        Schema = mongoose.Schema,
        autoIncrement = require('mongoose-auto-increment');
var Spetial_EventShema = mongoose.Schema({
    spetial_event_id: Number,
    name :String,
    description :String,
    price_description:String,
    flyer:String,
});

var Spetial_Event = mongoose.model('Spetial_Event', Spetial_EventShema);
Spetial_EventShema.plugin(autoIncrement.plugin, {model: 'Spetial_Event', field: 'spetial_event_id'});



