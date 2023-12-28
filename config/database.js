const mongoose=require("mongoose");
require("dotenv").config();


const dbConnect = async () => {
    try {
      const conn = await mongoose.connect(process.env.DATABASE_URL);
    }
    catch(error){
        console.log(error);
    }
  }


module.exports=dbConnect;