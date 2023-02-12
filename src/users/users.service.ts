import { Injectable,NotFoundException } from '@nestjs/common';
import {InjectModel}  from  '@nestjs/mongoose';
import { user } from './user.model';
import { Model } from 'mongoose';
@Injectable()
export class UsersService {
  constructor(@InjectModel('user') private readonly userModel:Model<user>){}
  
  async insertUser( id:string,userName:string,email: string,phoneNumber:number,order:string){
    const userId=Math.random().toString();
    const newUser=new this.userModel({userName,email,phoneNumber,order});
    const result= await newUser.save().then();
    return result.id as string;
  }
  async getUsers(){
   const users=await this.userModel.find().exec();
   return users as user[];
  }
  async getSingleUser(userId:string){
    const user=await this.findUser(userId);
  
    return {id:user.id,
      userName:user.userName,
      email:user.email,
      phoneNumber:user.phoneNumber,
      order:user.order};
  }
   async updateUser(userId:string,userName:string,email:string,phoneNumber:number,order:string){
     const updatedUser=await this.findUser(userId);
    if (userName)
   {
     updatedUser.userName=userName;
   }
     if (email)
     {
       updatedUser.email=email;
  }
    if (phoneNumber)
   {
       updatedUser.phoneNumber=phoneNumber;
    }
   if (order)
     {
       updatedUser.order=order;
    }
    updatedUser.save();
  }


  async deleteUser(userId: string) {
   const result= await this.userModel.deleteOne({_id:userId}).exec();
  }
  private async findUser(id:string):Promise<user>{
    let user;
    try{
        user=await this.userModel.findById(id);
    }catch(error){
      throw new NotFoundException("Could not find user.");
    }
    if(!user){
      throw new NotFoundException("Could not find user.");
    }
    return user;
}

}