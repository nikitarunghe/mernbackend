import mongoose from "mongoose";

 
   const Connection = async (username,password) => {
        const URL =`mongodb://${username}:${password}@ac-56dexbh-shard-00-00.3stv4sy.mongodb.net:27017,ac-56dexbh-shard-00-01.3stv4sy.mongodb.net:27017,ac-56dexbh-shard-00-02.3stv4sy.mongodb.net:27017/?ssl=true&replicaSet=atlas-9vjgla-shard-0&authSource=admin&retryWrites=true&w=majority&appName=blogapp`;
  
    
    try{
        await mongoose.connect(URL);
        console.log('Database connected successfully');
    }catch(error){
        console.log('Error while connecting to the database ', error);
    }
}
export default Connection;      