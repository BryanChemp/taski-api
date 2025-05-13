export interface BoardColumn {
    id: number;
    boardId: number;
    title: string;
    order: number;
    taskIds: number[];
}