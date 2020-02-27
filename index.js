const cool = require("cool-ascii-faces");
const express = require("express");

var app = express();
app.get("/", (req,res)=>{
	res.send("<html><body>Hello World!</body></html>")
})
app.listen(80);
console.log("Server ready!");