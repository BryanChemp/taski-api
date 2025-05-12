export function sendError(res: any, status: number, message: string, error?: any) {
    return res.status(status).json({ status, message, error});
}
  