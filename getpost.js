var http= require('http');
var fs=require('fs');
var querystring=require('querystring');
var  server =http.createServer(function(req, res){

    if(req.method==="GET"){
        res.writeHead(200,{"Content-Type":"text/html"});
        fs.createReadStream("form1.html","UTF-8").pipe(res);
    }else if(req.method==="POST"){
        var data="";
        req.on("data",function(chunk){
            data +=chunk;                                                       
        });
        req.on("end",function(){
            res.writeHead(200,{"Content-Type":"text/html"});
            
            var datap =querystring.parse(data);
            console.log(datap);
            res.end(JSON.stringify(datap));

          
           
        });
    }
});
server.listen(2727);