const express = require('express')
const path = require('path');

const app = express()
const port = 3000


app.get('/', function (req, res) {

    res.sendFile(path.join('/home/vishu/server/html', '/index.html'));
});

app.get('/about', function (req, res) {
    res.sendFile(path.join('/home/vishu/server/html', '/about.html'));
});

app.get('/service', function (req, res) {
    res.sendFile(path.join('/home/vishu/server/html', '/service.html'));
});

app.get('/contact', function (req, res) {
    res.sendFile(path.join('/home/vishu/server/html', '/contact.html'));
});

app.listen(port, () => {
    console.log(`server start on http://localhost:${port}/ `);
});