import Note from "../models/Note.js"

export async function productRoute(req,res){
try{
   const notes=await Note.find()  //add sort({createdat: -1} for reversing the order)
   res.status(200).json(notes)
}catch(error){
    console.error("error in productRoute methods",e)
}
}
export async function getNoteById(req,res){
 try{//const {title,content}= req.body;
   const noteById =await Note.findById(req.params.id)

   if(!getNoteById) return res.status(404).jsom({message:"Invalid id"})

    res.status(200).json(noteById);
 }catch(e){
    console.error(e);
    res.status(500).json({message:"Note retrival unsuccessful"})
 }}

export async function createNote(req, res){
   try{
    const {title,content}= req.body
    const newNote= new Note({title,content})

     const savednote=await newNote.save();
    res.status(201).json(savednote)

   }catch(e){
   console.error("error in createNotws",e)
   res.status(500).json({message:"Internal error"})
   }
}

export async function updateNote(req,res){
  try{const {title,content}=req.body
   const updatedNote=await Note.findByIdAndUpdate(req.params.id,{title,content},{new:true});

   if(!updatedNote) return res.status(404).send("Note data not found")
   res.status(500).json(updateNote)
  }catch(error){
   console.error(error)
  }
}

export async function deleteNote(req,res){
   try{
    const notesDelete= await Note.findByIdAndDelete(req.params.id);
    if(!notesDelete) return res.status(404).json({message:"Message successfully deleted"})

    res.status(500).json({message:"Message deleted successfully"});   
   }catch(e){
    console.error(e);
   }
}

