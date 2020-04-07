var http=require('http');
var MongoClient=require("mongodb").MongoClient;
var url="mongodb://localhost/27017/";
http.createServer(function(_req,res){
    MongoClient.connect(url,function(err,db){
        if(err) throw err;
        var dbo=db.db("mongo");
        var value={dname: /^x/};
        dbo.collection("student").deleteOne(value,function(err, result){
            if(err)throw err;
            res.writeHead(200,{"Content-Type":"text/html"});
            res.end(JSON.stringify(result));
            console.log(result);
        });

    });

}).listen(3000);
