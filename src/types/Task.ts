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
    priority: TaskPriority;
    type: TaskType;
    visibility: TaskVisibility;
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
    dependencies: number[];
    relatedTasks: number[];
}
