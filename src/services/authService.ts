import { mockUsers } from "../mocks/users.mock";

export function authenticateUser(email: string, password: string): string | null {
    const user = mockUsers.find((user) => user.email === email);

    if (user && user.password === password) {
        return 'abc123';
    }

    return null;
}