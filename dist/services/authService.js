"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateUser = authenticateUser;
const users_mock_1 = require("../mocks/users.mock");
function authenticateUser(email, password) {
    const user = users_mock_1.mockUsers.find((user) => user.email === email);
    if (user && user.password === password) {
        return Object.assign(Object.assign({}, user), { password: '', sessionToken: '123' });
    }
    return null;
}
