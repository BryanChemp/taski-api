import { Router } from 'express';
import { mockTasks } from '../mocks/tasks.mock';
import { ApiResponse } from '../types/Response';
import { Task } from '../types/Task';

const router = Router();

router.get('/', (req, res) => {
  const response: ApiResponse<Task[]> = {
    status: 200,
    message: '',
    data: mockTasks
  }
  res.json(response);
});

export default router;
