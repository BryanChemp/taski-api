import { Router } from 'express';
import { ApiResponse } from '../types/Response';
import { sendError } from '../helpers/sendError';
import { authenticateUser } from '../services/authService';
import { mockUsers } from '../mocks/users.mock';
import { User } from '../types/User';

const router = Router();

router.get('/', (req, res) => {
  res.json("");
});

router.post('/login', (req, res) => {
    try {
      const { email, password } = req.body;
  
      if (!email) return sendError(res, 400, 'Invalid email');
      if (!password) return sendError(res, 400, 'Invalid password');
  
      const authenticatedUser = authenticateUser(email, password);
      if (!authenticatedUser) return sendError(res, 404, 'User not found in our database');
  
      return res.status(200).json(<ApiResponse<User>>{
        status: 200,
        message: 'Login realizado com sucesso',
        data: authenticatedUser,
      });
    } catch (e) {
      console.error("Error loging user:", e);
      return sendError(res, 500, 'Internal server error');
    }
});

router.post('/authenticate', (req, res) => {
  try {
    return;
  } catch (e) {
    console.error("Error authenticating user:", e);
    return sendError(res, 500, 'Internal server error');
  }
});

export default router;
