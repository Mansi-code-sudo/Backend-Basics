const express=require("express");
const router=express.Router();

const {createTodo}=require("../controllers/createTodo");
const {getAllTodos}=require("../controllers/getAllTodos");
const {getSingleTodo}=require("../controllers/getSingleTodo");

router.post("/createTodo",createTodo);
router.get("/getAllTodos",getAllTodos);
router.get("/getSingleTodo/:id",getSingleTodo);
module.exports=router;