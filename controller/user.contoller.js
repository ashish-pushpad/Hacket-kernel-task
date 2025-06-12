import User from "../model/user.model.js";


export const createUser=async (req,res)=>{
console.log("this is save")
       console.log(req.body);
  try {
    const { name, email, mobile } = req.body;

    if(!name|| !email || !mobile){
      return  res.status(400).json({"message":"All credential are require"});
    }

    const newUser = await User.query().insert({ name, email, mobile });

    console.log(newUser);
    if(!newUser){
        return res.status(500).json({"message":"Internal server error " });
    }

    res.status(201).json({
      "message": "User created successfully",
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({ 'message':'somthign went wrong ' });
  }

}


export const fetchUser=async(req,res)=>{

    const User_data= await User.query();
    // console.log(User_data);
    res.status(200).render('seeUser',{User_data})

}

export const UserData=async()=>{

    const User_data= await User.query();
    //  console.log(User_data);
     return User_data;

}

