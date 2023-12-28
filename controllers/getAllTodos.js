const Todo=require("../models/Todo");

exports.getAllTodos=async(req,res)=>{
    try{
       const todos=await Todo.find({});
       res.status(200).json({
        success:true,
        data:todos,
        message:"Entire todo data is fetched",
       })
    }
    catch(error){
        console.log(error);
        console.error(error);
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:error.message
        })
    }
}