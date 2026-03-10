import express from "express";
import {getNoteById,createNote,updateNote,deleteNote,productRoute} from "../notesController/controller.js"


console.log(process.env.MONGO_URI)

const router= express.Router();

router.get("/",productRoute);
router.get("/:id",getNoteById);

router.post("/",createNote);

router.put("/:id",updateNote);
router.delete("/:id",deleteNote);

export default router;

//mongodb+srv://Mihir:Mihir#1705@cluster0.eqar4jd.mongodb.net/?appName=Cluster0