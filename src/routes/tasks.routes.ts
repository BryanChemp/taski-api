import { Router } from 'express';
import { mockTasks } from '../mocks/tasks.mock';

const router = Router();

router.get('/', (req, res) => {
  res.json(mockTasks);
});

export default router;
