import express from "express"
import notesRouter from "./router/notesRouter.js"
// import connectdb from "./config/db.js"
import db from "./config/firebase.js"
import rateLimiter from "./middleware/rateLimiter.js"
import dotenv from "dotenv"
import cors from "cors"


const app= express();

// connectdb();


app.use(express.json());

app.use(cors({
    origin:"http://localhost:5173",
}))
app.use(rateLimiter)

app.use("/api/notes",notesRouter)



app.listen(5002,()=>{
    console.log("Succenssful server at port 5002")
})

