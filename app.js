const express = require('express');
const path = require('path');
const sendEmail = require('./scripts/smtp');


// create express app
const app = express();
app.use(express.json());

// server htmls
app.get('/', (req, res) => {res.sendFile(path.join(__dirname, '/index.html'))});
app.get('/about', (req, res) => {res.sendFile(path.join(__dirname, '/about.html'))});
app.get('/selection', (req, res) => {res.sendFile(path.join(__dirname, '/selection.html'))});
app.get('/car', (req, res) => {res.sendFile(path.join(__dirname, '/car.html'))});
app.get('/car-single', (req, res) => {res.sendFile(path.join(__dirname, '/car-single.html'))});
app.get('/contact', (req, res) => {res.sendFile(path.join(__dirname, '/contact.html'))});

// SMTP endpoint
app.post('/smtp/', async(req, res)=>{
    const { receiver, subject, message } = req.body;
    await sendEmail(receiver, subject, message);

    res.send({ status: 'SUCCESS' });
})

// server static files
app.use(express.static('public'))

// listent
app.listen(3000, () => console.log('Example app is listening on port 3000.'));
