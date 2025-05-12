import { Router } from 'express';
import { ApiResponse } from '../types/Response';
import { Comment } from '../types/Comment';
import { supabase } from '..';
import { sendError } from '../helpers/sendError';
import { sendReponse } from '../helpers/sendReponse';

const router = Router();

router.get('/', async (req, res) => {
  const { data, error } = await supabase.from("comment").select("*");

  if (error) {
    sendError(res, 500, 'Error on get all comments from db');
  }

  sendReponse(res, 200, data);
});

export default router;
