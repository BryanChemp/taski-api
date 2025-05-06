"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockTasks = void 0;
const usersRef_mock_1 = require("./usersRef.mock");
exports.mockTasks = [
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
        reporter: usersRef_mock_1.mockUserRefs[0],
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
