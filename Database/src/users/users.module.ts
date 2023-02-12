
import { Module } from '@nestjs/common';
import { MongooseModule} from '@nestjs/mongoose'
import { UsersService } from './users.service';
import { UsersController } from './users.controller'; 
import mongoose from 'mongoose';
import { userSchema } from './user.model';
@Module({
  imports :[MongooseModule.forFeature([{name:'user',schema:userSchema}])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
