import axios from "axios"
import { PenSquareIcon } from "lucide-react";
import { Trash2Icon } from "lucide-react";
import { Link } from "react-router";
import toast from "react-hot-toast";
import { formatDate } from "../lib/utils.js";

const NotesCard=({note,setNotes})=>{
 const handleDelete=async (e,id)=>{
   e.preventDefault();
     
   if(!window.confirm("Are u sure want to stop tracking ")) return

   try{
    const deleteNote = await api.delete(`/notes/${id}`)
    setNotes((prev)=>prev.filter((note)=>note._id!== id))
    toast.success("Note deleted successfully")
   }catch(e){
    console.log("Error in handleDelete", error);
      toast.error("Failed to delete note");
   }
 }

 return (
   <Link 
      to={`/note/${note.id}`}
      className="card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#f1a839]"
    >
      <div className="card-body">
        <h3 className="card-title text-base-content">{note.title}</h3>
        <p className="text-base-content/70 line-clamp-3">{note.description}</p>
        
        <div className="card-actions justify-between items-center mt-4">
          <span className="text-sm text-base-content/60">
          
            {formatDate(note.createdAt)}
          </span>

          <div className="flex items-center gap-1">
            <PenSquareIcon className="size-4 text-info"/> 
            
            <button 
              className="btn btn-ghost btn-xs text-error" 
              onClick={(e) => handleDelete(e, note.id)}
            >
              <Trash2Icon className="size-4"/>
            </button>
          </div>   
        </div>
      </div>
    </Link>
  );



}

export default NotesCard