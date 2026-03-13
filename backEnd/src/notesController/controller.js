import db from "../config/firebase.js"
import { collection, doc, addDoc, getDoc, getDocs, deleteDoc, updateDoc, query, where } from "firebase/firestore"

const notesCollection = collection(db, "notes")

export async function createNotes(req, res) {
    try {
        const { title, description, techSlack, update } = req.body
        const docRef = await addDoc(notesCollection, {
            title,
            description,
            techSlack: techSlack || [],
            update: update || "Not Started",
            createdAt: new Date()
        })
        res.status(201).json({ id: docRef.id, message: "Note created" })
    } catch(e) {
        console.error("Error creating note", e)
        res.status(500).json({ message: "Error creating note" })
    }
}

export async function getEntry(req, res) {
    try {
        const snapshot = await getDocs(notesCollection)
        const notes = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        res.json(notes)
    } catch(e) {
        console.error("Error fetching notes", e)
        res.status(500).json({ message: "Error fetching notes" })
    }
}

export async function getEntryById(req, res) {
    try {
        const docRef = doc(db, "notes", req.params.id)
        const docSnap = await getDoc(docRef)
        if (!docSnap.exists()) return res.status(404).json({ message: "Note not found" })
        res.json({ id: docSnap.id, ...docSnap.data() })
    } catch(e) {
        console.error("Error fetching note", e)
        res.status(500).json({ message: "Error fetching note" })
    }
}

export async function deleteById(req, res) {
    try {
        const docRef = doc(db, "notes", req.params.id)
        await deleteDoc(docRef)
        res.json({ success: true, message: "Note deleted" })
    } catch(e) {
        console.error("Error deleting note", e)
        res.status(500).json({ message: "Error deleting note" })
    }
}

export async function updateNotes(req, res) {
    try {
        const { title, description, techStack, update } = req.body
        const docRef = doc(db, "notes", req.params.id)
        await updateDoc(docRef, { title, description, techStack, update })
        res.json({ success: true, message: "Note updated" })
    } catch(e) {
        console.error("Error updating note", e)
        res.status(500).json({ message: "Error updating note" })
    }
}

export async function getQuery(req, res) {
    try {
        const q = query(notesCollection, where("techSlack", "array-contains", "js"))
        const snapshot = await getDocs(q)
        const notes = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        res.json(notes)
    } catch(e) {
        console.error("Error in query", e)
        res.status(500).json({ message: "Server error" })
    }
}