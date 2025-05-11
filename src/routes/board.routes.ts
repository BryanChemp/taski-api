import { Router } from 'express';
import { ApiResponse } from '../types/Response';
import { Board } from '../types/Board';

const router = Router();

router.get('/', (req, res) => {
  const response: ApiResponse<Board[]> = {
    status: 200,
    message: '',
    data: []
  }
  res.json(response);
});


router.get('/:userId', (req, res) => {
  const userId = parseInt(req.params.userId);
  
  const response: ApiResponse<Board[]> = {
    status: 200,
    message: '',
    data: []
  };
  res.json(response);
});

export default router;
