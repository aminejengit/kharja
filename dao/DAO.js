var Space = require('./../models/Space.js');
module.exports = {
    create: function (object) {
        try {
           object.save(function(err,connection){
               console.log(object+"created");
           });
        } catch (exception) {
            return exception;
        }
    },
    getAllSpaces: function () {
       Space.model.find({name:"jn"},function(err,spaces){
           console.log("-----"+spaces);
           return spaces;
       })
    }
    
};