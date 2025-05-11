import { Router } from 'express';
import { ApiResponse } from '../types/Response';
import { BoardColumn } from '../types/BoardColumn';

const router = Router();

router.get('/', (req, res) => {
  const response: ApiResponse<BoardColumn[]> = {
    status: 200,
    message: '',
    data: []
  }
  res.json(response);
});

router.get('/:boardId', (req, res) => {
  const boardId = parseInt(req.params.boardId);
  
  const response: ApiResponse<BoardColumn[]> = {
    status: 200,
    message: '',
    data: []
  };
  res.json(response);
});

export default router;
