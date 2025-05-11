import { TaskVisibility } from "./TaskVisibility";
import { UserRef } from "./UserRef";

export interface Board {
    id: number;
    name: string;
    description?: string;
    createdAt: string;
    updatedAt: string;
    visibility: TaskVisibility;
    membersId: number[];
    createdBy: UserRef;
    columnsIds: number[];
}
