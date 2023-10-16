import User from "./model"
import bcrypt from "bcryptjs";

// export const signUp = async(req,res,next)=>{

//     const {name ,email,password} = req.body

//     let existingUser;
//     try{
//         existingUser = User.findOne({email:email})
//     }catch(err){
//         console.log(err)
//     }
//     if(existingUser){
//         return res.status(400).json({message :"User already exist"})
//     }

//     const hashedPassword = bcrypt.hashSync(password)
    
//     const user = new User({
//         name,
//         email,
//         password:hashedPassword
//     })

//     try{
//         await user.save();
//     }catch(err){
//         console.log(err)
//     }
//     return res.status(201).json({message: user})
    

// }



export const signUp = async (req, res, next) => {
    const { name, email, password,phone, gender,city,state } = req.body;
  
    let existingUser;
    try {
      existingUser = await User.findOne({ email: email }); // Add 'await' here
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "Internal Server Error" }); // Handle the error
    }
  
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
  
    const hashedPassword = bcrypt.hashSync(password, 10); // You should specify the number of rounds for bcrypt hashing
  
    const user = new User({
      name,
      email,
      password: hashedPassword,
      phone,gender,city,state
  
    });
  
    try {
      await user.save();
      return res.status(201).json({ message: "User created successfully" });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  };

export const signIn = async(req,res,next)=>{

    const {email, password} = req.body;
     console.log(req.body)
    let existingUser;
    try{
        existingUser = await User.findOne({email:email})
      
    }catch(err){console.log(err)}

    if(!existingUser){
        return res.status(400).json({message: "User not exist"})
    }


    const isPasswordCorrect = bcrypt.compareSync(password,existingUser.password);
    if(!isPasswordCorrect){
        return res.status(400).json({massage:"invalid email/password"});
    }

    return res.status(200).json({message:"successful login", user : existingUser})
} 




export const getAllUser = async(req,res,next)=>{
    try{
        const allUser = await User.find();
        res.json(allUser);
    }catch(err){
        res.status(500).json({err :err.message});
    }
    
}



export const deleteUser = async(req,res,next)=>{

    const userId = req.params.id;

    try{
        const deleteUsers = await User.findByIdAndRemove(userId);
        if(!deleteUsers){
            return res.status(404).json({ message: "user not found" });
        }
        res.json({ message: "user deleted", deleteUser });
    }catch(err){
        res.status(500).json({ err: err.message });
    }


}




export const getUser = async(req,res,next)=>{
  
  const {_id} = req.params;
  let user;

  try{

   user = await User.findById(_id);
   if(!user){
    return res.status(404).json({error : 'User not found'})
   }
   res.json(user)
   
  }catch(err){
    res.status(500).json({err:err.message})
  }


}



export const getLoginPerson = async(req,res,next)=>{

    const{email,password} = req.body;

   let loginPerson;

   try{
    loginPerson = await User.findOne({email:email})
       res.json(loginPerson)
   }catch(err){console.log(err)}

   if(!loginPerson){
       return res.status(400).json({message: "User not exist"})
   }

   //return res.status(200).json({message:"", user : loginPerson})
   
  
   
}