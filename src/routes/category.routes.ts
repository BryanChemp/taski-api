import { Router } from 'express';
import { ApiResponse } from '../types/Response';
import { Category } from '../types/Category';
import { mockCategories } from '../mocks/categories.mock';

const router = Router();

router.get('/', (req, res) => {
  const response: ApiResponse<Category[]> = {
    status: 200,
    message: '',
    data: mockCategories
  }
  res.json(response);
});

export default router;
