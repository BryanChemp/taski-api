import { Task } from '../types/Task';

export const mockTasks: Task[] = [
  {
    id: 1,
    columnId: 1,
    boardId: 1,
    teamId: 1,
    order: 1,
    title: 'Corrigir erro de login',
    description: 'Corrigir erro ao autenticar no sistema',
    priority: 'high',
    type: 'bug',
    visibility: 'private',
    tags: [{ id: 1, name: 'bug', color: '#ff0000' }],
    checklist: [],
    categories: [{ id: 1, name: 'Login' }],
    participants: [],
    assignee: { id: 2, name: 'Ana Dev' },
    reporter: { id: 1, name: 'Bryan' },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    dueDate: new Date().toISOString(),
    startDate: new Date().toISOString(),
    estimatedTimeMinutes: 120,
    timeLogs: [],
    comments: [],
    dependencies: [],
    relatedTasks: []
  }
];
