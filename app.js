const express=require('express')
const axios =require('axios') 
const path = require('path')
const ejs= require('ejs') 
var app=express()
app.use(express.static(__dirname+'/public'))
app.set("view engine","ejs") 
// bol to rhe h hm. sunn hm tutorial dekh lenge //haan ./haan
//https://api.covid19india.org/data.json


app.get("/",async (req,res)=>
{
    var result=await axios.get('https://api.covid19india.org/data.json')
    //res.send(result.data.cases_time_series[82])
    res.render("index",{name: "Lalit"})
}) 

let port = 3000 
app.listen(port,()=>{
    console.log(`Server live on ${port}`)
})
