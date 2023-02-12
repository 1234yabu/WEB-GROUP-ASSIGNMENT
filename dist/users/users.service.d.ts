import { user } from './user.model';
import { Model } from 'mongoose';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<user>);
    insertUser(id: string, userName: string, email: string, phoneNumber: number, order: string): Promise<string>;
    getUsers(): Promise<user[]>;
    getSingleUser(userId: string): Promise<{
        id: string;
        userName: string;
        email: string;
        phoneNumber: number;
        order: string;
    }>;
    updateUser(userId: string, userName: string, email: string, phoneNumber: number, order: string): Promise<void>;
    deleteUser(userId: string): Promise<void>;
    private findUser;
}
