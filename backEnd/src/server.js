
import express from "express";
import notesRouter from "../src/router/notesRouter.js";
import {connectDS} from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/ratelimiter.js";
import cors from "cors";

dotenv.config();

const app= express();
connectDS();

//Middlewware
app.use(express.json())  //translator middleware that filters the json object and attached it to req.body

//custom 
app.use((req,res,next)=>{
    console.log("Request method is ${req.method} and req url is ${req.url}");
    next(); //without it , request will not go further
})

app.use(
    cors({
        origin:"http://localhost:5173",
    })
)
app.use(rateLimiter);
app.use("/api/notes",notesRouter);

app.listen(5001,
()=>{
    console.log("the server is active on 5001");
});

// app.get("/api/notes", (req,res)=>{
// res.status(200).send("You got 5 ruppees");})

// app.post("/api/notes",(req,res)=>{
//     res.send("GET request to homepage")
// })

// app.put("/api/notes/:id",(req,res)=>{
//     res.json({message:"Note updated successfully"})
// })
// app.delete("/api/notes/:id",(req,res)=>{
//     res.json({message:"Notes deleted successfully"})
// })
