export interface TimeLog {
    id: number;
    taskId: number;
    userId: number;
    startTime: string;
    endTime?: string;
    durationMinutes?: number;
}