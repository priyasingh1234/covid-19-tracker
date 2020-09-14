const express=require('express')
const axios =require('axios')  
var app=express()

app.use(express.static(__dirname+'/public'))
app.set("view engine","ejs")  // this simply sets the view engine for a express app.
// The view engine is nothing but a mode modern way of writing html i.e.
// it can have conditions and loops.

var fetchData = async ()=>{  
    return await axios.get('https://api.covid19india.org/data.json')
}
let axiosResult
app.get("/",async (req,res)=>
{
    axiosResult=await fetchData();

    //console.log(axiosResult.data)
    let n = axiosResult.data.cases_time_series.length-1; //yes
    res.render("index",{
        result: axiosResult.data.cases_time_series[n]
    }) //it is a function that renders the ejs pages   
}) 

app.get("/:state",async (req,res)=>
{
    axiosResult=await fetchData();
    axiosResult.data.statewise.map((key)=>{
        if(key.state==req.params.state){
            res.render("state",{
                result: key
            })
        }
    })
    //var arr = [12,13,14,'priya']
    // for(var i=0;i<arr.length;i++)
    // console.log(arr[i])
    //arr.map((value)=>{console.log(value)})
})

// app.get("*",(req,res)=>{
//     res.render("pages/error-404.ejs")
// })

let port = process.env.PORT || 3000 
app.listen(port,process.env.IP,()=>{
    console.log(`Server live on ${port}`)
})
