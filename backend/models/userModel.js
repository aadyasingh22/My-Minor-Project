const {Schema, model} = require('../connection');

const myschema = new Schema({
    username : String,
    email : {type:String},
    password : String,
    city : {type:String}
});

module.exports = model('users', myschema);