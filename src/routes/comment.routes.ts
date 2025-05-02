import { Router } from 'express';
import { ApiResponse } from '../types/Response';
import { mockComments } from '../mocks/comments.mock';
import { Comment } from '../types/Comment';

const router = Router();

router.get('/', (req, res) => {
  const response: ApiResponse<Comment[]> = {
    status: 200,
    message: '',
    data: mockComments
  }
  res.json(response);
});

export default router;
