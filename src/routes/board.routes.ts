import { Router } from 'express';
import { ApiResponse } from '../types/Response';
import { Board } from '../types/Board';
import { mockBoards } from '../mocks/boards.mock';

const router = Router();

router.get('/', (req, res) => {
  const response: ApiResponse<Board[]> = {
    status: 200,
    message: '',
    data: mockBoards
  }
  res.json(response);
});

export default router;
