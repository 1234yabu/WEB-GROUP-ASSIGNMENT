import * as mongoose from 'mongoose';
export declare const userSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    userName: string;
    password: string;
    email: string;
    phoneNumber: number;
    order: string;
}>;
export interface user extends mongoose.Document {
    id: string;
    userName: string;
    email: string;
    phoneNumber: number;
    order: string;
}
