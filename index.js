const express = require('express')
const http = require('http');
const app = express();
const port = 3000

const httpServer = http.createServer(app);

httpServer.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});