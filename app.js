var express= require("express")
var app= express()
var bodi = require("body-parser");
app.use(bodi.urlencoded({extened:true}))
app.get("/",function(req,res){
    res.render("home.ejs")
    
})
app.get("/home",function(req,res){
    res.render("home.ejs")
    
})

app.get("/contact",function(req,res){
	res.render("contact.ejs")
})
app.get("/admissions",function(req,res){
	res.render("admissions.ejs")
})


app.use('/assets',express.static('assets'))
var port=process.env.PORT || 3000;
app.listen(port);


