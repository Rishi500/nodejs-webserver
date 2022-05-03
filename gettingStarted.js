/**
 * Building a basic server using http module
 */

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000

/**
 * The below callback is executed upon every request that comes in.
 * When a new request is received, the 'request' event is called with two arguments
 * the first being 'req' which is an http.IncomingMessage object and 'res' which is http.ServerResponse object
 */
const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')
    res.end('hello world')
})

server.listen(port, hostname, ()=>{
    console.log(`server running at http:${hostname}:${port}/`)
})