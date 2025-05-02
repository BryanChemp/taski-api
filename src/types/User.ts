export type UserType = "adm" | "regular" | "super-adm"

export interface User {
    id: number,
    name: string,
    lastname: string,
    email: string,
    phone: string,
    type: UserType,
    password: string
}