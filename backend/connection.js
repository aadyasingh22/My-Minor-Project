const mongoose = require('mongoose');

const url = "mongodb+srv://aadyaverma2122:adyamu1622@cluster0.n1mgwtt.mongodb.net/handicraftdata?retryWrites=true&w=majority"


// asynchronous function - return Promise object
mongoose.connect(url)
.then((result) => {
    // console.log(result); 
    console.log('database connected');
})
.catch((err) => {
    console.log(err);
});

// console.log('Another Statement');

module.exports = mongoose;