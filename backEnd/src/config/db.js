import mongoose from "mongoose";

export const connectDS= async ()=>{
  try{
   await mongoose.connect(process.env.MONGO_URI);
   console.log("succesfully connected to MONGODB")
  }catch(e){
  console.error("Error connecting to MONGODOB",e);
  process.exit(1);
  }
  
};

export default connectDS;
//mongodb+srv://Mihir:Mihir#1705@cluster0.eqar4jd.mongodb.net/?appName=Cluster0