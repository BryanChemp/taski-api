import { TaskVisibility } from "./taskVisibility.type";
import { UserRef } from "./userRef.type";

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
