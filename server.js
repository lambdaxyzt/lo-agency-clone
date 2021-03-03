const http = require('http');
const fs = require('fs');

let port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('./Views/index.html', {
        encoding: 'utf8'
    }, (err, data) => {
        if (!!err)
            console.log(err.message);
        else {
            res.write(data)
            res.end()
        }
    })
});

server.listen(port, () => {
    console.log(`app is listening to port ${port}`);
})