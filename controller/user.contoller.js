import User from "../model/user.model.js";


export const createUser=async (req,res)=>{
console.log("this is save")
       console.log(req.body);
  try {
    const { name, email, mobile } = req.body;

    if(!name|| !email || !mobile){
      return  res.status(400).json({"message":"All credential are require"});
    }

    const isMobileValid = /^[6-9]\d{9}$/.test(mobile)
    const isMailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if(isMailValid){
     return res.status(400).send("<h1>Invalid Mail</h1>")
    }
    if(isMobileValid){
      return res.status(400).send("<h1>invalid Mobile no</h1>")
    }

    const newUser = await User.query().insert({ name, email, mobile });

    console.log(newUser);
    if(!newUser){
        return res.status(500).send("<h1>Internal server error</h1> ");
    }

    res.status(201).send(
      "<h1>User created successfully </h1>",
    );
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

