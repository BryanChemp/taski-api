import { BoardColumn } from "../types/BoardColumn";

export const mockBoardColumns: BoardColumn[] = [
  {
    id: 1,
    boardId: 1,
    title: 'A Fazer',
    order: 1,
    taskIds: [1, 2],
  },
  {
    id: 2,
    boardId: 1,
    title: 'Em Progresso',
    order: 2,
    taskIds: [],
  },
  {
    id: 3,
    boardId: 1,
    title: 'Concluído',
    order: 3,
    taskIds: [],
  },
];
