import mongoose from "mongoose"; 

export async function connect(){

    try{
         mongoose.connect(process.env.MONGODB_URI!);
         const connection = await mongoose.connection; 

         connection.on('connected', () =>{
         console.log('connection established ');
         }) 

         connection.on('error',(err)=>{
         console.log('connection error ');

         process.exit();
         })
    } 
    catch(error){
        console.log(error);
    }
}