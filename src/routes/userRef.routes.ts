import { Router } from 'express';
import { ApiResponse } from '../types/Response';
import { mockUserRefs } from '../mocks/usersRef.mock';
import { UserRef } from '../types/UserRef';
import { sendError } from '../helpers/sendError';

const router = Router();

router.get('/', (req, res) => {
  const response: ApiResponse<UserRef[]> = {
    status: 200,
    message: '',
    data: mockUserRefs
  }
  res.json(response);
});

router.get('/by-ids', (req, res) => {
  try {
    const idsParam = req.query.ids as string;
    
    if (!idsParam) {
      res.status(400).json({
        status: 400,
        message: 'Parameter "ids" is required',
        data: null
      });
    }

    const ids = idsParam.split(',').map(id => {
      const num = parseInt(id.trim());
      if (isNaN(num)) throw new Error('Invalid ID format');
      return num;
    });

    const users = mockUserRefs.filter(user => ids.includes(user.id));
    
    const response: ApiResponse<UserRef[]> = {
      status: 200,
      message: `Found ${users.length} users`,
      data: users
    };

    res.json(response);

  } catch (error) {
    const msg = error instanceof Error ? error.message : 'Invalid request';
    sendError(res, 500, msg)
  }
});

export default router;
