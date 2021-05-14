const express = require("express");
const bodyParser = require("body-parser");
const urlencoded = require("body-parser/lib/types/urlencoded");

const app = express();

app.use(bodyParser.urlencoded(
    {
        extended : true
    }
));

app.use(express.static(__dirname + '/public'));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
    res.send("Thanks for posting that");
    console.log(req.body);
})


app.listen(3000,function(){
    console.log("app is running on port 3000");
});

// spotify api key

// last fm api key