import { Router } from 'express';
import { ApiResponse } from '../types/Response';
import { Tag } from '../types/Tag';
import { sendError } from '../helpers/sendError';
import { sendReponse } from '../helpers/sendReponse';
import { supabase } from '..';
const router = Router();

router.get('/', async (req, res) => {
  const { data, error } = await supabase.from("tag").select("*");

  if (error) {
    sendError(res, 500, 'Error on get all tags from db');
  }

  sendReponse(res, 200, data);
});

export default router;
