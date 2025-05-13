import { Visibility } from "./visibility";
import { UserRef } from "./userRef.type";

export interface Board {
    id: number;
    name: string;
    description?: string;
    createdAt: string;
    updatedAt: string;
    visibility: Visibility;
    membersId: number[];
    createdBy: UserRef;
    columnsIds: number[];
}
