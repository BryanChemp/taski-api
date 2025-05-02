import { Router } from 'express';
import { ApiResponse } from '../types/Response';
import { ChecklistItem } from '../types/ChecklistItem';
import { mockChecklist } from '../mocks/checklist.mock';

const router = Router();

router.get('/', (req, res) => {
  const response: ApiResponse<ChecklistItem[]> = {
    status: 200,
    message: '',
    data: mockChecklist
  }
  res.json(response);
});

export default router;
