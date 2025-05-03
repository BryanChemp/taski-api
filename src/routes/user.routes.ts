import { Router } from 'express';
import { ApiResponse } from '../types/Response';
import { sendError } from '../helpers/sendError';
import { authenticateUser } from '../services/authService';

const router = Router();

router.get('/', (req, res) => {
  res.json("");
});

export default router;
