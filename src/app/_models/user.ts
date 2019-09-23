import { Role } from "./role";

export class User {
    id: number;
    user_email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: Role;
    token?: string;
}