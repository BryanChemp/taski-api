import { UserRef } from "./UserRef";

export interface Reaction {
    emoji: string;
    amount: number;
}

export type CommentVisibility = 'public' | 'team' | 'private';

export interface Comment {
    id: number;
    taskId: number;
    author: UserRef;
    message: string;
    createdAt: string;
    updatedAt?: string;
    isEdited?: boolean;
    parentCommentId?: number;
    reactions?: Reaction[];
    mentionsUserIds?: number[];
    attachmentIds?: number[];
    visibility?: CommentVisibility;
}