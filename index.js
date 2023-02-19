const express = require("express")
const { postRoute } = require("./routes/post.routes")

const { connection } = require("./config/db")

const app = express()
app.get("/",(req,res)=>{
    res.send("This is homepage")
})
app.use(express.json())
app.use("/data", postRoute)

app.listen(3500, async () => {
    try {
        await connection
        console.log("Connected to db")
    } catch (err) {
        console.log("Can't connected to db")
    }
    console.log("Runing port at 3500")
})