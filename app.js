const express = require("express");
const bodyParser = require("body-parser");
const urlencoded = require("body-parser/lib/types/urlencoded");

const app = express();

app.use(express.urlencoded({
    extended: true
}));

app.use(express.static(__dirname + '/public'));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});


app.listen(3000,function(){
    console.log("app is running on port 3000");
});