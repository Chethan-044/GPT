import jwt from "jsonwebtoken"; 
import User from '../models/User.js';


export const protect = async (req, res, next) => {
    let token  = req.headers.authorization;

    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        const userID = decoded.id;
        
        const user = await User.findById(userID)
        if(!user){
            return res.json({success:false, message:"Not Authorized , user not found"});
        }

        req.user = user;
        next();
    }catch(error){
           return res.status(401).json({message:"Not authorized, token failed!" })

    }


    
}
