const express=require("express");
const path=require("path");
const app=express();
const hbs=require("hbs");
const port=process.env.PORT || 8000
const paths=path.join(__dirname,"../public")
const path1=path.join(__dirname,"../templates/partials")
const path2=path.join(__dirname,"../templates/views")
app.set("view engine","hbs")
hbs.registerPartials(path1)
app.set("views",path2)
app.get("/",(req,res)=>{
    res.render("index");
})
app.get("/about",(req,res)=>{
    res.render("about");
})
app.get("/weather",(req,res)=>{
    res.render("weather");
})
app.use(express.static(paths))
app.get("",(req,res)=>{
    console.log("hello world!");

})
app.listen(port,()=>{
    console.log("hello world");
})