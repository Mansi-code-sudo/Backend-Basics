const Todo=require("../models/Todo");

exports.getSingleTodo=async(req,res)=>{
    try{
        const {id}=req.params;
        const todo=await Todo.findById({_id:id});

        if(!todo){
            return res.status(404).json({
                success:false,
                message:"Data not found",
            })
        }

        res.status(200).json({
            success:true,
            data:todo,
            message:"Data found",
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