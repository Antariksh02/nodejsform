import { Data } from "../Model/ClientSchema.js";
import bcrypt from 'bcrypt';

export const addRegisterData = async (req, res) => {
    const { name, email, password,confirmPassword } = req.body;

    try {
       
        const hashedPassword = await bcrypt.hash(password, 10);
            if(password == confirmPassword){
                await Data({ name, email, password: hashedPassword }).save();
                res.status(200).send("You are now registered");
                res.end();
            }else if(password != confirmPassword){
                 res.send("please check password")
                 res.end();
            }
     
    } catch (error) {
        console.log(error);
        res.status(500).send("Server error");
    } 
};
