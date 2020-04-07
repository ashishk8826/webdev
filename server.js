var http=require('http');
http.createServer(function(req, res)
{
    res.writeHead(200,{'content-type':'text/html'});
 
    res.write("hello from server");
    res.end();

}
).listen(4000);