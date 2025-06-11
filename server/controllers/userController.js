import UserModel from "../models/userModel.js";
import bcryptjs from 'bcryptjs'

export async function registerUserController(req,res){
    try{

        const{name,email,password} = req.body;

        if(!name || !email || !password){
            return res.status(400).json({
                message:"Provide email,name,password",
                error:true,
                success:false
            })
        }

        const user = await UserModel.findOne({email})
        if(user){
            return res.json({
                message:"Already registered user",
                error:true,
                success:false
            })
        }

        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password,salt)

        const payload = {
            name,email,password:hashedPassword
        }
const newUser = new UserModel(payload)
const save = await newUser.save()

    }catch(e){
        
        return res.status(500).json({
            message:error.message || error,
            error:true,
            success:false
            
        })
    }
}