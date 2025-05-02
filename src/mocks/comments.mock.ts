import { Comment } from "../types/Comment";

export const mockComments: Comment[] = [
  {
    id: 1,
    author: {
      id: 101,
      name: 'Alice Santos',
    },
    message: 'Esse é um ótimo recurso!',
    createdAt: '2025-04-30T10:15:00Z',
  },
  {
    id: 2,
    author: {
      id: 102,
      name: 'Bruno Lima',
    },
    message: 'Concordo com o comentário anterior.',
    createdAt: '2025-04-30T10:45:00Z',
    updatedAt: '2025-04-30T11:00:00Z',
  },
  {
    id: 3,
    author: {
      id: 103,
      name: 'Carla Mendes',
    },
    message: 'Há um pequeno erro no parágrafo 2.',
    createdAt: '2025-04-30T11:20:00Z',
  },
];
