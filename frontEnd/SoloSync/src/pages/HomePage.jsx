import Navbar from "../components/Navbar.jsx"
import {useEffect} from "react"
import { useState } from "react"
import RateLimitedUI from "../components/RateLimited.jsx" 
import axios from "axios"
import toast from "react-hot-toast"
import NotesCard from "../components/NotesCard.jsx"



const HomePage=()=>{
const [isRatelimited,setIsRateLimited]=useState(false);
const [loading,setLoading]=useState(false);
const [notes,setNotes] = useState([])
const [search, setSearch] = useState("")

useEffect(()=>{
    setLoading(true);
    
    const fetchNote=async ()=>{
        try{
        const res=await axios.get("http://localhost:5002/api/notes");
      console.log(res.data)
        setNotes(res.data)
    }catch(error){
        if(error.response?.status===429){
            setIsRateLimited(true);
        }
        console.log(error)
    }finally{
        setLoading(false);
    }

};fetchNote();

},[]);
const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(search.toLowerCase()) ||
    note.description.toLowerCase().includes(search.toLowerCase()) ||
    note.techSlack?.some(tech => tech.toLowerCase().includes(search.toLowerCase()))
)


return <div className="flex">
  <Navbar /> 
  {isRatelimited && <RateLimitedUI/>}
  <main className="flex-1 min-h-screen bg-base-100">
    <div className="max-w-7xl p-4 mt-6">

        <input
    type="text"
    placeholder="Search by keywords..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="input input-bordered w-full max-w-sm mb-6"
/>
        
        {loading && <div className="text-center text-primary py-10">Loading Details...</div>}
         {filteredNotes.length>0 && !isRatelimited && (
            <div className="grid grid-cols-1  lg:grid-cols-3 gap-6" >
                {filteredNotes.map((note) =>(
          <NotesCard 
        key={note.id} 
        note={note} 
        setNotes={setNotes} 
    />
                ) )}
          
            </div>          
          )}
    </div>
  </main>
</div>
}

export default HomePage