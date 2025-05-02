export function sendError(res: any, status: number, message: string) {
    return res.status(status).json({ status, message });
}
  