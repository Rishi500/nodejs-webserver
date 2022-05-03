const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    const stream = fs.createReadStream(`${__dirname}/sample-text-file.txt`);
    stream.pipe(res);
    console.log('res');
});

server.listen(3000);