import mongoose from "mongoose"

const noteSchema= new mongoose.Schema({
    title:{
        type: String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    techSlack:{
        type: [String],
        default:[]
    },
    update:{
        type: String,
        enum: ["Not Started","In Progress","Completed"],
        default: ["Not Started"]
    }
},
    {
        timestamps:true
    }
)

 const Notes= mongoose.model("Note",noteSchema);

 export default Notes;