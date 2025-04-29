import { UserRef } from "./UserRef";

export interface Comment {
    id: number;
    author: UserRef;
    message: string;
    createdAt: string;
    updatedAt?: string;
}