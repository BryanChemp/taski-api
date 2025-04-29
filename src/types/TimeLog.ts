export interface TimeLog {
    userId: number;
    startTime: string;
    endTime?: string;
    durationMinutes?: number;
    description?: string;
}