
export type ResponseStatus = 200 | 201 | 400 | 401 | 403 | 404 | 500;

export interface ApiResponse<T = undefined> {
  status: ResponseStatus;
  message: string;
  data?: T;
  error?: string;
}