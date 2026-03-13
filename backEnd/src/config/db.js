import mongoose from "mongoose"

const connectdb = async()=>{
    try{
        await mongoose.connect("mongodb+srv://Mihir:Mihir%231705@cluster0.eqar4jd.mongodb.net/ProjectTracker?appName=Cluster0")
        console.log("MongoDb connected successfully")
    }catch(e){
        console.log("Error connecting to MongoDb",e)
    }
}

export default connectdb;
