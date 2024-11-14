const express = require("express")
const app = express();

app.get("/", (req, res, next) => {
    res.json({ message: "This is node js application!!!" })
})

app.listen(3000,()=>{
    console.log("Application is runnning!")
})