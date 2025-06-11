import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config()

if(!process.env.MONGODB_URI){
    throw new Error(
        "Please provide MONGODB "
    )
    
}

async function ConnectDB(){
    try{
await mongoose.connect(process.env.MONGODB_URI)
console.log("connect DB")

    }catch(error){
        console.log("MongoDb connect error",error);
        process.exit(1);
    }
}
export default ConnectDB;