import { Router } from 'express';
import { ApiResponse } from '../types/Response';
import { TimeLog } from '../types/TimeLog';

const router = Router();

router.get('/', (req, res) => {
  const response: ApiResponse<TimeLog[]> = {
    status: 200,
    message: '',
    data: []
  }
  res.json(response);
});

export default router;
