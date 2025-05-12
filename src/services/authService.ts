import { supabase } from "..";
import { User } from "../types/User";

export async function authenticateUser(email: string, password: string): Promise<User | null> {
    const { data, error } = await supabase
        .from("user")
        .select("*")
        .eq("email", email)
        .single();

    if (error || !data) return null;

    if (data.password === password) {
        return {
            ...data,
            password: '',
        };
    }

    return null;
}