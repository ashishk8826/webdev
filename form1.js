var http = require('http');
var fs=require('fs');
var server=http.createServer(function(req,res)
{
    if(req.method==="GET")
    {
        res.writeHead(200,{'content-type':'text/html'});
        fs.createReadStream("form1.html","UTF-8").pipe(res);
         
        
    } else if(req.method==="POST"){
       console.log("calling via post method")
    }
});
server.listen(8080);







