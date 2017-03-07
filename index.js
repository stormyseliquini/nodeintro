const http = require('http')

const server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('hello world!');
});

server.listen(3000, 'localhost', null, function() {
    console.log('the server is listening on port: 3000');
})
