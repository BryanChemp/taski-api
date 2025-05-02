import { ChecklistItem } from "../types/ChecklistItem";


export const mockChecklist: ChecklistItem[] = [
  {
    id: 1,
    taskId: 1,
    description: 'Verificar nível de óleo',
    done: false,
  },
  {
    id: 2,
    taskId: 1,
    description: 'Checar pressão dos pneus',
    done: true,
  },
  {
    id: 3,
    taskId: 1,
    description: 'Testar luzes do veículo',
    done: false,
  },
];
