import { Router } from 'express';
import { ApiResponse } from '../types/Response';
import { BoardColumn } from '../types/BoardColumn';
import { mockBoardColumns } from '../mocks/boardColumns.mock';

const router = Router();

router.get('/', (req, res) => {
  const response: ApiResponse<BoardColumn[]> = {
    status: 200,
    message: '',
    data: mockBoardColumns
  }
  res.json(response);
});

export default router;
