import { Router } from 'express';
import { ApiResponse } from '../types/response.type';
import { Task } from '../types/task.type';
import { sendError } from '../helpers/sendError';
import { sendReponse } from '../helpers/sendReponse';
import { supabase } from '..';

const router = Router();

router.get('/', async (req, res) => {
  const { data, error } = await supabase.from("task").select("*");

  if (error) {
    sendError(res, 500, 'Error on get all tasks from db');
  }

  sendReponse(res, 200, data);
});

router.get('/by-column/:columnId', async (req, res) => {
  const columnId = parseInt(req.params.columnId);

  const { data, error } = await supabase.from("task").select("*").eq("columnId", columnId);

  if (error) {
    sendError(res, 500, 'Error on get tasks by column id from db');
  }

  sendReponse(res, 200, data);
});

router.post('/add', async (req, res) => {
  const task: Task = req.body;

  const { data, error } = await supabase.from("task").insert([task]);

  if (error) {
    console.log('error', error);
    return sendError(res, 500, 'Error adding task to the database');
  }

  sendReponse(res, 201, data);
});

export default router;
