import { mockUsers } from "../mocks/users.mock";
import { User } from "../types/User";

export function authenticateUser(email: string, password: string): User | null {
    const user = mockUsers.find((user) => user.email === email);

    if (user && user.password === password) {
        return {
            ...user,
            password: '',
            sessionToken: '123'
        };
    }

    return null;
}