import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    addProduct(userId: string, userName: string, userEmail: string, userPhoneNumber: number, userOrder: string): Promise<{
        id: string;
    }>;
    getAllUsers(): Promise<import("./user.model").user[]>;
    getuser(userId: string): Promise<{
        id: string;
        userName: string;
        email: string;
        phoneNumber: number;
        order: string;
    }>;
    updateUser(id: string, userName: string, userEmail: string, userPhoneNumber: number, userOrder: string): Promise<any>;
    removeUser(userId: string): Promise<any>;
}
