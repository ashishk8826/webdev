var http = require('http');
var fs = require('fs');
var querystring=require('querystring');
var MongoClient =require('mongodb').MongoClient;
var url="mongodb://localhost:27017/";
  http.createServer(function(req,res)
{
    if(req.url==="/form1"){
        res.writeHead(200,{"Content-Type":"text/html"});
        fs.createReadStream("form1.html","UTF-8").pipe(res);
    }
if(req.method==="POST"){
    var data ="";
    req.on("data",function(chunk){
        data +=chunk;

    });
    req.on("end",function(chunk){
     
        MongoClient.connect(url,function(err,db)
        {
            if(err) throw err;
            var q =querystring.parse(data);
            var dbo = db.db("mongo");
            dbo.collection('student').insertOne(q,function(err, res){
                if(err) throw err;
                console.log(res);
                db.close();

            });

        })

    });

}
}).listen(2727);