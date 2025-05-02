import { Task } from '../types/Task';
import { mockCategories } from './categories.mock';
import { mockUserRefs } from './usersRef.mock';

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
    tagsIds: [1],
    checklistIds: [1, 2],
    categoriesIds: [1],
    participantsIds: [1],
    reporter: mockUserRefs[0],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    dueDate: new Date().toISOString(),
    startDate: new Date().toISOString(),
    estimatedTimeMinutes: 120,
    timeLogsIds: [],
    commentsIds: [1, 2, 3],
    dependencies: [],
    relatedTasks: []
  }
];
