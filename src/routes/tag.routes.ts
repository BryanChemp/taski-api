import { Router } from 'express';
import { ApiResponse } from '../types/response.type';
import { Tag } from '../types/tag.type';
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

router.post('/add', async (req, res) => {
  const tag: Tag = req.body;

  const { data, error } = await supabase.from("tag").insert([tag]);

  if (error) {
    console.log('error', error);
    return sendError(res, 500, 'Error adding tag to the database');
  }

  sendReponse(res, 201, data);
});

export default router;
