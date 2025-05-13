import { Router } from 'express';
import { ApiResponse } from '../types/response.type';
import { Comment } from '../types/comment.type';
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

router.post('/add', async (req, res) => {
  const comment: Comment = req.body;

  const { data, error } = await supabase.from("comment").insert([comment]);

  if (error) {
    console.log('error', error);
    return sendError(res, 500, 'Error adding comment to the database');
  }

  sendReponse(res, 201, data);
});

export default router;
