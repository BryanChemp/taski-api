import { Router } from 'express';
import { mockTasks } from '../mocks/tasks.mock';
import { ApiResponse } from '../types/Response';
import { Task } from '../types/Task';
import { mockUserRefs } from '../mocks/usersRef.mock';
import { UserRef } from '../types/UserRef';

const router = Router();

router.get('/', (req, res) => {
  const response: ApiResponse<UserRef[]> = {
    status: 200,
    message: '',
    data: mockUserRefs
  }
  res.json(response);
});

export default router;
