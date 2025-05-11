import { Router } from 'express';
import { ApiResponse } from '../types/Response';
import { ChecklistItem } from '../types/ChecklistItem';

const router = Router();

router.get('/', (req, res) => {
  const response: ApiResponse<ChecklistItem[]> = {
    status: 200,
    message: '',
    data: []
  }
  res.json(response);
});

router.get('/by-task/:taskId', (req, res) => {
  const taskId = parseInt(req.params.taskId);
  const response: ApiResponse<ChecklistItem[]> = {
    status: 200,
    message: '',
    data: []
  };
  res.json(response);
})

export default router;
