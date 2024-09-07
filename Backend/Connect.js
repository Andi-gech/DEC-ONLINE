const mongoose=require('mongoose')


const connect=()=>{
  
  return  mongoose.connect('mongodb+srv://andifab23:fMUbqhDXIKRExCKq@cluster0.smzhf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
)
  
}

module.exports=connect
