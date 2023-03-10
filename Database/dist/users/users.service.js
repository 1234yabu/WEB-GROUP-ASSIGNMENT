"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let UsersService = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async insertUser(id, userName, email, phoneNumber, order) {
        const userId = Math.random().toString();
        const newUser = new this.userModel({ userName, email, phoneNumber, order });
        const result = await newUser.save().then();
        return result.id;
    }
    async getUsers() {
        const users = await this.userModel.find().exec();
        return users;
    }
    async getSingleUser(userId) {
        const user = await this.findUser(userId);
        return { id: user.id,
            userName: user.userName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            order: user.order };
    }
    async updateUser(userId, userName, email, phoneNumber, order) {
        const updatedUser = await this.findUser(userId);
        if (userName) {
            updatedUser.userName = userName;
        }
        if (email) {
            updatedUser.email = email;
        }
        if (phoneNumber) {
            updatedUser.phoneNumber = phoneNumber;
        }
        if (order) {
            updatedUser.order = order;
        }
        updatedUser.save();
    }
    async deleteUser(userId) {
        const result = await this.userModel.deleteOne({ _id: userId }).exec();
    }
    async findUser(id) {
        let user;
        try {
            user = await this.userModel.findById(id);
        }
        catch (error) {
            throw new common_1.NotFoundException("Could not find user.");
        }
        if (!user) {
            throw new common_1.NotFoundException("Could not find user.");
        }
        return user;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('user')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map