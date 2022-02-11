const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'))
}); 

app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'))
})

app.get('/babbage.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/babbage.html'))
}); 

app.get('/berners-lee.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/berners-lee.html'))
}); 

app.get('/clarke.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/clarke.html'))
}); 

app.get('/hamilton.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/hamilton.html'))
}); 

app.get('/hopper.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/hopper.html'))
}); 

app.get('/lovelace.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/lovelace.html'))
}); 

app.get('/turing.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/turing.html'))
});  

app.listen(3030);