const {Schema, model} = require('../connection');

const myschema = new Schema({
    title : String,
    material : String,
    category : String,
    price : Number
});

module.exports = model('handicafts', myschema);