//method 1
const https = require('https');

const req = https.get('https://jsonplaceholder.typicode.com/todos/1',(res)=>{
    console.log(`status code : ${res.statusCode}`);

    res.on('data', data=>{
        console.log(process.stdout.write(data));
    })
})

req.on('error', (error)=>{
    console.error(error);
})

req.end();


// method 2

const axios = require("axios");

axios.get("https://jsonplaceholder.typicode.com/todos/1").then(
  (res) => {
    console.log(`statusCode: ${res.status}`);
    console.log(res?.data);
  },
  (error) => {
    console.log(error);
  }
);

