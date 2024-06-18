import { Data } from "../Model/ClientSchema.js"


export const addLoginData = async(req,res)=>{

    const {email} = req.body
try {
   const exist = await Data.findOne({email:email})
   if(!exist){
    res.send("You are not registered")
   }
   else{
    res.send("You are now logged in")
   }
} catch (error) {
    console.log(error)
}

}