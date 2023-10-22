const express = require('express');
const app = express();

const port = 5000;

app.get('/', (req, res) => {
    res.send('response from server');
})

app.get('/add', (req, res) => {
    res.send('response from add');
})

app.listen(port, () => {
    console.log('express server started');
})