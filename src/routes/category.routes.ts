import { Router } from 'express';
import { ApiResponse } from '../types/Response';
import { Category } from '../types/Category';

const router = Router();

router.get('/', (req, res) => {
  const response: ApiResponse<Category[]> = {
    status: 200,
    message: '',
    data: []
  }
  res.json(response);
});

export default router;
