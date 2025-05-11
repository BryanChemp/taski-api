import { Router } from 'express';
import { ApiResponse } from '../types/Response';
import { Task } from '../types/Task';

const router = Router();

router.get('/', (req, res) => {
  const response: ApiResponse<Task[]> = {
    status: 200,
    message: '',
    data: []
  }
  res.json(response);
});

router.get('/by-column/:columnId', (req, res) => {
  const columnId = parseInt(req.params.columnId);
  
  const response: ApiResponse<Task[]> = {
    status: 200,
    message: '',
    data: []
  };
  res.json(response);
});

export default router;
