import { Router } from 'express';
import { ApiResponse } from '../types/Response';
import { BoardColumn } from '../types/BoardColumn';
import { supabase } from '..';
import { sendError } from '../helpers/sendError';
import { sendReponse } from '../helpers/sendReponse';

const router = Router();

router.get('/', async (req, res) => {
  const { data, error } = await supabase
    .from("column")
    .select("*");

  if (error) {
    return sendError(res, 500, 'Error on get all columns from db');
  }

  sendReponse(res, 200, data);
});

router.get('/:boardId', async (req, res) => {
  const boardId = parseInt(req.params.boardId);

  const { data, error } = await supabase
    .from("column")
    .select("*")
    .eq("boardId", boardId);

  if (error) {
    return sendError(res, 500, 'Error on get columns by boardId');
  }

  sendReponse(res, 200, data);
});

export default router;
