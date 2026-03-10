import { PenSquareIcon, Trash2Icon } from "lucide-react";
import {Link} from "react-router"
import {formatDate} from "../../lib/utils.js"
import toast from "react-hot-toast";
import axios from "axios";

const NoteCard = ({ note, setNotes }) => {
  const handleDelete = async (e, id) => {
    e.preventDefault(); 
    e.stopPropagation();// get rid of the navigation behaviour

    if (!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      await axios.delete(`/notes/${id}`);
      setNotes((prev) => prev.filter((note) => note._id !== id)); // get rid of the deleted one
      toast.success("Note deleted successfully");
    } catch (error) {
      console.log("Error in handleDelete", error);
      toast.error("Failed to delete note");
    }
  };
    return <Link to={'/note/${note._id'}
     className="card bg-base-100 hover:shadow-lf transition-all duration-200
      border-t-4 border-solid border-[#00FF9D]"
      >
        <div className="card-body">
            <h3 className="card-title text-base-content">{note.title}</h3>
            <p className="test-base-content/70 line-clamp-3">{note.content}</p>
            <div className="card-actions justify-between items-center mt-4">
                 <span className="text-sm =text-base-content/60">
                 {formatDate(note.createdAt)}</span>

              <div className="flex items-center gap-1">
                 <PenSquareIcon className="size-4"/>
                 <button className="btn btn-ghost btn-xs text-error">
                    <Trash2Icon className="size-4"/></button></div>   
            </div>
        </div>
      </Link>
}
export default NoteCard ;
// import { PenSquareIcon, Trash2Icon } from "lucide-react";
// import { Link } from "react-router"; 
// import { formatDate } from "../../lib/utils.js";
// import toast from "react-hot-toast";
// import api from "../lib/axios";

// const NoteCard = ({ note, setNotes }) => {
//   const handleDelete = async (e, id) => {
//     // 1. Stop the browser from following the Link
//     e.preventDefault(); 
//     // 2. Stop the click from "bubbling up" to the Link parent
//     e.stopPropagation(); 

//     if (!window.confirm("Are you sure you want to delete this note?")) return;

//     try {
//       await api.delete(`/notes/${id}`);
//       setNotes((prev) => prev.filter((n) => n._id !== id));
//       toast.success("Note deleted successfully");
//     } catch (error) {
//       console.log("Error in handleDelete", error);
//       toast.error("Failed to delete note");
//     }
//   };

//   return (
//     <Link 
//       to={`/note/${note._id}`} // FIXED: Use backticks and added closing }
//       className="card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#00FF9D]"
//     >
//       <div className="card-body">
//         <h3 className="card-title text-base-content">{note.title}</h3>
//         <p className="text-base-content/70 line-clamp-3">{note.content}</p>
        
//         <div className="card-actions justify-between items-center mt-4">
//           <span className="text-sm text-base-content/60">
//             {formatDate(note.createdAt)}
//           </span>

//           <div className="flex items-center gap-1">
//             {/* Wrap Icon in a Link if you want it to navigate to an edit page */}
//             <PenSquareIcon className="size-4 text-base-content/70 hover:text-primary" />
            
//             <button 
//               className="btn btn-ghost btn-xs text-error"
//               onClick={(e) => handleDelete(e, note._id)} // FIXED: Added the onClick handler
//             >
//               <Trash2Icon className="size-4" />
//             </button>
//           </div>   
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default NoteCard;