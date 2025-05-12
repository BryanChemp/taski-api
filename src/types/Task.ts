import { Category } from "./Category";
import { TaskPriority } from "./TaskPriority";
import { TaskType } from "./TaskType";
import { TaskVisibility } from "./TaskVisibility";
import { UserRef } from "./UserRef";

export interface Task {
    id: number;
    columnId: number;
    boardId: number;
    teamId: number;
    order: number;
    title: string;
    description: string;
    priority: number;
    type: number;
    visibility: number;
    tagsIds: number[];
    checklistIds: number[];
    categoriesIds: number[];
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
