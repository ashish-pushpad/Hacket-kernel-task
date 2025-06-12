import Task from "../model/task.model.js";


export const createTask=async (req,res)=>{
    console.log(req.body);
    // return
 try{
    let {userId,title,description}=req.body;
     userId=parseInt(userId);
    if(!userId|| !title || !description){
        return res.status(400).json({"message":"All credential are Require"})
    }

    const isCreate= await Task.query().insert({userId,title,description,isPending: false});
    console.log(isCreate);
    if(isCreate){
        res.status(201).json({"message":"task Created successfully"});
    }
    else{
        res.status(500).json({"message":"something went wrong"});
    }
 }
 catch(error){
    console.log(error);
    res.status(500).json({"message":"Somethign went wrong","error":error})
 }
}

export const updateTask=async (req,res)=>{
  try{
        const conditionObj=req.body.conditionObj;
        const updateObj=req.body.updateObj;

        const task= await Task.query.findOne(conditionObj);

        if(task){
        const isUpdate=  await task.$query().patch(updateObj);
        }
        if(isUpdate){
            res.status(200).json({'message':"Updated successfully",'updateTask':isUpdate})
        }
    }  
    catch(error){
         console.log(error);
         res.status(500).json({"message":"somethign went wrong"});
    }
}


export const fetchTask=async (req,res)=>{
    // console.log("im here")
    console.log(req.query);
    console.log(JSON.parse(req.query.data));
    try{
            const id=JSON.parse(req.query.data);
            // console.log(typeof(id))
            // console.log(id);
            // return;
            if(!id){
                return res.status(400).json({"message":"did't get any id"});
            }
            
            const taskData = await Task.query().where('userId', id);
            console.log(taskData);
            if(!taskData) return res.status(404).json({"message":"Not any Task asingh"});

            res.status(200).render('userTask',{taskData});

        }
        catch(error){
            console.log(error);
            res.status(500).json({"message ":"somethign went wrong"});
        }
}