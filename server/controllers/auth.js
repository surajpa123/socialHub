import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
// reg user
export const register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      picturePath,
      friends,
      location,
      occupation,
    } = req.body;

    const salt = await bcryptjs.genSalt();
    const hashedPassword = await bcryptjs.hash(password, salt);
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      picturePath,
      friends,
      location,
      occupation,
      viewedProfile: Math.floor(Math.random() * 10000),
      impressions: Math.floor(Math.random() * 10000),
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({"error":err.message});
  }
};


export const login = async (req,res) =>{
try {
  const {email,password}= req.body;

  const user = await User.findOne({email:email});
  


  if(!user) return res.json({msg:"User doesn't exist"})
  
  const isMatch = await bcryptjs.compare(password,user.password);
  if (!isMatch) return res.status(400).json({msg:'Invalid Password'});
  const token = jwt.sign({id: user._id} ,process.env.SecretKey);
  // delete user.password;
  res.status(200).json({token,user});
} catch (err) {
  // console.log("Error from catch")
  res.status(500).json({error:err.message});
}
}

