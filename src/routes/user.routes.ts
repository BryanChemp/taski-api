import { Router } from 'express';
import { ApiResponse } from '../types/Response';
import { sendError } from '../helpers/sendError';
import { authenticateUser } from '../services/authService';

const router = Router();

router.get('/', (req, res) => {
  res.json("");
});

router.post('/authenticate', (req, res) => {
    try {
      const { email, password } = req.body;
  
      if (!email) return sendError(res, 400, 'Invalid email');
      if (!password) return sendError(res, 400, 'Invalid password');
  
      const token = authenticateUser(email, password);
      if (!token) return sendError(res, 404, 'User not found in our database');
  
      return res.status(200).json(<ApiResponse<{ token: string }>>{
        status: 200,
        message: 'Login realizado com sucesso',
        data: { token },
      });
    } catch (e) {
      console.error("Error authenticating user:", e);
      return sendError(res, 500, 'Internal server error');
    }
});

export default router;
