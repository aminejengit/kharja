var mongoose = require('mongoose'),
        Schema = mongoose.Schema,
        autoIncrement = require('mongoose-auto-increment');
var EventShema = mongoose.Schema({
    event_id: Number,
    space_id: Number,
    spetial_event_id: Number,
    date :Date
});

var Event = mongoose.model('Event', EventShema);
EventShema.plugin(autoIncrement.plugin, {model: 'Event', field: 'event_id'});


