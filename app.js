const express=require('express')
const axios =require('axios')  
var app=express()

app.use(express.static(__dirname+'/public'))
app.set("view engine","ejs")  // this simply sets the view engine for a express app.
// The view engine is nothing but a mode modern way of writing html i.e.
// it can have conditions and loops.


app.get("/",async (req,res)=>
{
    var axiosResult=await axios.get('https://api.covid19india.org/data.json') //abey zoom dekh

    //console.log(axiosResult.data)
    let n = axiosResult.data.cases_time_series.length-1; //yes
    res.render("index",{
        result: axiosResult.data.cases_time_series[n]
    }) //it is a function that renders the ejs pages
    // passed to it that exists in the views folder
    //name kyu? // ek baat bta tyjhe kaise pta ki ejs file , views /forms k andar hai?
    //arrrrrrrreeee wo to hmbhi dekh liye but usme hi html page h ye kaise pta ?    
}) 

let port = 3000 
app.listen(port,()=>{
    console.log(`Server live on ${port}`)
})
