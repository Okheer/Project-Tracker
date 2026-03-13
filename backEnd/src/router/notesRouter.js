import express, { Router } from "express"
import {createNotes,getEntryById,getQuery,getEntry,deleteById,updateNotes} from "../notesController/controller.js"

const router=express.Router();

router.post("/",createNotes)
router.get("/filter",getQuery)
router.get("/",getEntry)
router.put("/:id",updateNotes)
router.get("/:id",getEntryById)
router.delete("/:id",deleteById)

export default router