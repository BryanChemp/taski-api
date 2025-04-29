import { Category } from "./Category";
import { ChecklistItem } from "./ChecklistItem";
import { Tag } from "./Tag";
import { TaskPriority } from "./TaskPriority";
import { TaskType } from "./TaskType";
import { TaskVisibility } from "./TaskVisibility";
import { TimeLog } from "./TimeLog";
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
    tags: Tag[];
    checklist: ChecklistItem[];
    categories: Category[];
    participants: UserRef[];
    assignee?: UserRef;
    reporter: UserRef;
    createdAt: string;
    updatedAt: string;
    dueDate?: string;
    startDate?: string;
    estimatedTimeMinutes?: number;
    timeLogs: TimeLog[];
    comments: Comment[];
    dependencies: number[];
    relatedTasks: number[];
}
