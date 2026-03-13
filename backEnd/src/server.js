import express from "express"
import notesRouter from "./router/notesRouter.js"
// import connectdb from "./config/db.js"
import db from "./config/firebase.js"
import rateLimiter from "./middleware/rateLimiter.js"
import dotenv from "dotenv"
import cors from "cors"
import path from "path"


const app= express();
const __dirname=path.resolve()

// connectdb();


app.use(express.json());

if(process.env.NODE_ENV !=="production"){
app.use(cors({
    origin:"http://localhost:5173",
}))
}
app.use(rateLimiter)

app.use("/api/notes",notesRouter);
if(process.env.NODE_ENV === "production"){
app.use(express.static(path.join(__dirname,"../frontEnd/SoloSync/dist")))

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"../frontEnd/SoloSync","dist","index.html"))
})}



app.listen(5002,()=>{
    console.log("Succenssful server at port 5002")
})

