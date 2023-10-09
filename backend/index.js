// import express
const express = require('express');
const userRouter = require('./routers/userRouter');
const handicraftRouter = require('./routers/handicraftRouter');
const cors = require('cors');

//initialize expess
const app = express();
const port = 5000;

//middlewares

app.use(express.json());
app.use(cors({
    origin : ['http://localhost:3000']
}));

app.use('/user', userRouter);
app.use('/handicraft', handicraftRouter);

//routes
app.get('/', (req, res) => {
    res.send('response from express');
});

app.get('/home', (req, res) => {
    res.send('response from home');
});

app.get('/add', (req, res) => {
    res.send('response from add');
});

app.get('/getall', (req, res) => {
    res.send('response from getall');
})

app.listen(port, () => {
    console.log('server started');
} );