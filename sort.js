var http= require('http');
var MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost/27017";
http.createServer(function(req,res){
    MongoClient.connect(url, function(err,db){
        if(err) throw err;
        var dbo=db.db("mongo");
        var value={dname: -1};
        dbo.collection("student").find().sort(value).toArray(function(err,result){
            if(err) throw err;
            res.writeHead(200,{"Content-Type":"text/html"});
            res.end(JSON.stringify(result));
            console.log(result);
        });

    });
}).listen(3000);