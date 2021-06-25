var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer((req, res)=>{
    if(req.url != '/favicon.ico')
    {
        console.log("running");
        console.log(req.url);
        res.write("this is a test");
        res.write('<a href="https:/www.github.com">github</a>');

        res.setHeader('Location', '/');
        res.end();
    }
}).listen(process.env.PORT || 4200);