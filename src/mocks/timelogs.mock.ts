import { TimeLog } from "../types/TimeLog";

export const mockTimeLogs: TimeLog[] = [
  {
    userId: 1,
    startTime: '2025-05-01T08:00:00Z',
    endTime: '2025-05-01T10:00:00Z',
    durationMinutes: 120,
    description: 'Reunião de planejamento semanal',
  },
  {
    userId: 2,
    startTime: '2025-05-01T09:30:00Z',
    endTime: '2025-05-01T11:00:00Z',
    durationMinutes: 90,
    description: 'Revisão de código',
  },
  {
    userId: 3,
    startTime: '2025-05-01T13:00:00Z',
    description: 'Implementando novos recursos',
  },
];
