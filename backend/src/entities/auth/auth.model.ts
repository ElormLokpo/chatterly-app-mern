import { Schema, model } from "mongoose"
import bcrypt from "bcrypt";
import { v4 as guid } from "uuid"

export const AuthSchema = new Schema({
    _id:{
        type:String, 
    },
    firstname:String, 
    lastname:String,
    description:String,
    phone:String,
    username:{
        type:String, 
        required: true
    }, 
    password:{
        type:String, 
        required: true,
        select:false
    }
})


AuthSchema.pre('save', async function () {
    this._id = guid();

    let salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
})


export const AuthModel = model("AuthModel", AuthSchema);