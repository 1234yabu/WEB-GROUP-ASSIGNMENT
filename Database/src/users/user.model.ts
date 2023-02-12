import * as mongoose from 'mongoose';
export const userSchema=new mongoose.Schema({
    userName:{type:String,required:true},
    password:{type:String,required:true},
    email:{type:String,required:true},
    phoneNumber:{type:Number,required:true},
    order:{type:String,required:true},
});

export interface user extends mongoose.Document{
        id:string;
        userName:string;
        email: string;
        phoneNumber:number;
        order:string;
}