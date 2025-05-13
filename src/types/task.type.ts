import { Category } from "./category.type";
import { UserRef } from "./userRef.type";
import { Visibility } from "./visibility";

export interface Task {
    id: number;
    columnId: number;
    boardId: number;
    teamId: number;
    order: number;
    title: string;
    description: string;
    priority: number;
    visibility: Visibility;
    tagsIds: number[];
    checklistIds: number[];
    categoriesIds: Category[];
    participantsIds: number[];
    reporter: UserRef;
    createdAt: string;
    updatedAt: string;
    dueDate?: string;
    startDate?: string;
    estimatedTimeMinutes?: number;
    timeLogsIds: number[];
    commentsIds: number[];
    projectId: number;
    watchersIds: number[];
    isFinished: boolean;
}
