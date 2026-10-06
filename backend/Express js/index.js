const express = require("express");

const app = express();

let port = 8000;

app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);
})

app.use((req , res)=>{
    console.log("root is start Path");
})


app.get("/",(req , res)=>{
    res.send("you contacted root path");
})



app.get("/search",(req , res)=>{
    res.send("you contacted root path apple");
})


app.get("/orange",(req , res)=>{
    res.send("you contacted root path orange");
})






