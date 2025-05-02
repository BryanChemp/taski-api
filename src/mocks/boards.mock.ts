import { Board } from "../types/Board";

export const mockBoards: Board[] = [
  {
    id: 1,
    name: 'Projeto Apollo',
    description: 'Planejamento e execução do Projeto Apollo',
    teamId: 10,
    createdAt: '2025-04-28T09:00:00Z',
    updatedAt: '2025-04-30T15:20:00Z',
    visibility: 'public',
    membersId: [1, 2, 3],
    createdBy: {
      id: 1,
      name: 'Alice Santos',
      avatarUrl: 'https://example.com/avatars/alice.png',
    },
    columnsIds: [1, 2, 3],
  },
  {
    id: 2,
    name: 'Marketing 2025',
    teamId: 12,
    createdAt: '2025-04-25T10:30:00Z',
    updatedAt: '2025-04-30T16:10:00Z',
    visibility: 'public',
    membersId: [2, 4],
    createdBy: {
      id: 2,
      name: 'Bruno Lima',
    },
    columnsIds: [],
  },
  {
    id: 3,
    name: 'Financeiro Interno',
    description: 'Controle de orçamento mensal',
    teamId: 14,
    createdAt: '2025-04-20T08:45:00Z',
    updatedAt: '2025-04-29T12:00:00Z',
    visibility: 'private',
    membersId: [3],
    createdBy: {
      id: 3,
      name: 'Carla Mendes',
      avatarUrl: 'https://example.com/avatars/carla.jpg',
    },
    columnsIds: [],
  },
];
