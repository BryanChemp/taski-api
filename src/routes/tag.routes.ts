import { Router } from 'express';
import { ApiResponse } from '../types/Response';
import { Tag } from '../types/Tag';
const router = Router();

router.get('/', (req, res) => {
  const response: ApiResponse<Tag[]> = {
    status: 200,
    message: '',
    data: []
  }
  res.json(response);
});

export default router;
