const http = require('http');
const fs = require('fs');
const path = require("path");


const hostName = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    // console.log(req.headers);

    // Gives info about which req we have called like get/post
    console.log('Request from' + req.url + 'by method' + req.method);

    if (req.method == 'GET') {
        var fileUrl;
        if (req.url == '/') {
            fileUrl = '/index.html'
        } else {
            fileUrl = req.url;
        }
        var filePath = path.resolve('./Public/' + fileUrl);
        const fileExtension = path.extname(filePath);
        if (fileExtension == '.html') {
            //Callback function: it runs/ get called after the execution of fun stmts
            fs.exists(filePath, (exists) => {
                if (!exists) {
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'text/html');
                    res.end('<html><body><h1>Error...! ' + fileUrl + ' does not exist </h1></body></html>')
                }
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                //createReadStream reads data and convert into stream of bytes (big data can be pass)
                //pipe() gives all the data in one go even it is one line or multiline
                fs.createReadStream(filePath).pipe(res);
            });
        }
        else {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end('<html><body><h1>Error...! ' + fileUrl + ' not a html file </h1></body></html>')
        }
    }
    else {
        //req other than get
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end('<html><body><h1>Error...! ' + fileUrl + ' not supported </h1></body></html>')
    }
});

server.listen(port, hostName, () => {
    console.log(`server running at http://${hostName}:${port}`)
});