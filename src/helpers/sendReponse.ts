import { ApiResponse, ResponseStatus } from "../types/response.type";

export async function sendReponse(res: any, status: ResponseStatus, data?: any, message?: string) {
    const response: ApiResponse<any> = {
        status,
        message: message || '',
        data
    };

    return res.status(status).json(response);
}