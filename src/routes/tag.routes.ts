import { Router } from 'express';
import { ApiResponse } from '../types/Response';
import { Tag } from '../types/Tag';
import { mockTags } from '../mocks/tags.mock';

const router = Router();

router.get('/', (req, res) => {
  const response: ApiResponse<Tag[]> = {
    status: 200,
    message: '',
    data: mockTags
  }
  res.json(response);
});

export default router;
