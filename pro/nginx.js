var fs = require('fs');
var http = require('http');

var mask = process.umask(0);
var socket = '/tmp/' + 'dev.dearmr.wang.sock';

if (fs.existsSync(socket)) {
    fs.unlinkSync(socket);
}

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(socket, function() {
    if (mask) {
        process.umask(mask);
        mask = null;
    }
});

console.log('Server running at ' + socket);
