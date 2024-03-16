const http = require("http");

const server = http.createServer((req, res)=>{
    if(req.url === "/"){
        res.write("Hello World");
        res.end();
    }

    if(req.url === "/user"){
        res.write("This is user page");
        res.end();
    }
})

server.listen(3000);