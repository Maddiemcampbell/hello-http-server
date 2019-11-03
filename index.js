const http = require('http');

const serverObj = http.createServer((req, res) => {
    console.log(`receives ${req.method} request for: ${req.url}`);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World');
    res.end();
});

serverObj.listen(8080, 'localhost', null, function(){
    console.log('Server is listening on localhost:8080');
});
