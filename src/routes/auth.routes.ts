import { Router } from 'express';
import { ApiResponse } from '../types/response.type';
import { sendError } from '../helpers/sendError';
import { authenticateUser } from '../services/authenticate.service';
import { User } from '../types/user.type';
import { sendReponse } from '../helpers/sendReponse';

const router = Router();

router.get('/', (req, res) => {
  res.json("");
});

router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      if (!email) return sendError(res, 400, 'Invalid email');
      if (!password) return sendError(res, 400, 'Invalid password');
  
      const authenticatedUser = await authenticateUser(email, password);
      if (!authenticatedUser) return sendError(res, 404, 'User not found in our database');

      sendReponse(res, 200, authenticatedUser);
    } catch (e) {
      console.error("Error loging user:", e);
      return sendError(res, 500, 'Internal server error', e);
    }
});

router.post('/authenticate', (req, res) => {
  try {
    return;
  } catch (e) {
    console.error("Error authenticating user:", e);
    return sendError(res, 500, 'Internal server error', e);
  }
});

export default router;
