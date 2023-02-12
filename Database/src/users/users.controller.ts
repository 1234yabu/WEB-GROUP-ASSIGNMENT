import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async addUser(
    @Body ('id')  userId:string,
    @Body('userName') userName:string,
    @Body ('email') userEmail:string,
    @Body ('phoneNumber') userPhoneNumber:number,
    @Body ('order') userOrder:string,
     )
   {
    const generatedId=await this.usersService.insertUser(userId, userName,userEmail,userPhoneNumber,userOrder);
     return{id:generatedId}
  }
  @Get()
  async  getAllUsers(){
    const users=await this.usersService.getUsers().then();
    return users;
  }

  @ Get(':id')
  getuser(@Param('id') userId:string){
    return this.usersService.getSingleUser(userId)
  }
  
  @Patch(':id')
  async updateUser(
    @Param('id') id: string,
    @Body('username') userName: string,
    @Body('email') userEmail: string,
    @Body('phoneNumber')  userPhoneNumber: number,
    @Body('order')  userOrder:string,
  ) {
    await this.usersService.updateUser(id,userName,userEmail, userPhoneNumber,userOrder);
    return null;
  }

  @Delete(':id')
  async removeUser(@Param('id') userId: string) {
      await this.usersService.deleteUser(userId);
      return null;
  }

}

 
