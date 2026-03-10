import {Routes,Route} from "react-router";

import HomePage from "./pages/HomePage.jsx"
import CreatePage from "./pages/CreatePage.jsx"
import NoteDetailPage from "./pages/NoteDetailPage.jsx"
import toast from "react-hot-toast"


const App = () => {
  return  <div data-theme="forest">
    {/* <button className="btn btn-primary">Click me</button> */}
    {/* <button onClick={()=>toast.success('Congrats')} className="text-red-500 p-4 bg-pink-300">Click Me</button> */}
  <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/create/" element={<CreatePage/>}/>
    <Route path="/notes/:id" element={<NoteDetailPage/>}/>

  </Routes>
  </div>
}

export default App;