import { Router } from 'express';
import { ApiResponse } from '../types/Response';
import { Category } from '../types/Category';
import { supabase } from '..';
import { sendError } from '../helpers/sendError';
import { sendReponse } from '../helpers/sendReponse';

const router = Router();

router.get('/', async (req, res) => {
  const { data, error } = await supabase
    .from("category")
    .select("*");

  if (error) {
    return sendError(res, 500, 'Error on get categories from db');
  }

  sendReponse(res, 200, data);
});

export default router;
