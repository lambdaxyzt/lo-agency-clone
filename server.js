const http = require('http');
const fs = require('fs');

let port = 3000;

const server = http.createServer((req, res) => {
    if(req.url == "./index.html" || req.url == "/" ) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.readFile('./index.html', {
            encoding: 'utf8'
        }, (err, data) => {
            if (!!err)
                console.log(err.message);
            else {
                res.write(data)
                res.end()
            }
        })
    }
    if(req.url == "./asset/css/style.css") {
        res.writeHead(200, {'Content-Type': 'text/css'});
        fs.readFile(req.url, {
            encoding: 'utf8'
        }, (err, data) => {
            if (!!err)
                console.log(err.message);
            else {
                res.write(data)
                res.end()
            }
        })
    }
    if(req.url == "./asset/js/app.js") {
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        fs.readFile(req.url, {
            encoding: 'utf8'
        }, (err, data) => {
            if (!!err)
                console.log(err.message);
            else {
                res.write(data)
                res.end()
            }
        })
    }
});

server.listen(port, () => {
    console.log(`app is listening to port ${port}`);
})