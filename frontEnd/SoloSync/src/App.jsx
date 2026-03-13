import {Routes,Route} from "react-router";

import HomePage from "./pages/HomePage.jsx"
import CreatePage from "./pages/CreatePage.jsx"
import EditPage from "./components/NoteDetailPage.jsx";

import RequestPage from "./pages/RequestPage.jsx"
import toast from "react-hot-toast"
import NoteDetailPage from "./components/NoteDetailPage.jsx";


const App = () => {
  return  <div data-theme="halloween">
    
    {/* <button className="btn btn-primary">Click me</button> */}
    {/* <button onClick={()=>toast.success('Congrats')} className="text-red-500 p-4 bg-pink-300">Click Me</button> */}
  <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/create/" element={<CreatePage/>}/>
    {/* <Route path="/notes/:id" element={<RequestPage/>}/> */}
    <Route path="/note/:id" element={<NoteDetailPage/>} />

  </Routes>
  </div>
}

export default App;
