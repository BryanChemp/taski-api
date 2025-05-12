import { Router } from 'express';
import { ApiResponse } from '../types/Response';
import { ChecklistItem } from '../types/ChecklistItem';
import { supabase } from '..';
import { sendError } from '../helpers/sendError';
import { sendReponse } from '../helpers/sendReponse';

const router = Router();

router.get('/', async (req, res) => {
  const { data, error } = await supabase.from("checklist").select("*");

  if (error) {
    sendError(res, 500, 'Error on get all checklists from db');
  }


  sendReponse(res, 200, data);
});

router.get('/by-task/:taskId', async (req, res) => {
  const taskId = parseInt(req.params.taskId);

  const { data, error } = await supabase.from("checklist").select("*").eq("taskId", taskId);

  if (error) {
    sendError(res, 500, 'Error on get checklists by task id');
  }

  sendReponse(res, 200, data);
})

router.post('/add', async (req, res) => {
  const checklist: ChecklistItem = req.body;

  const { data, error } = await supabase.from("checklist").insert([checklist]);

  if (error) {
    console.log('error', error);
    return sendError(res, 500, 'Error adding checklist to the database');
  }

  sendReponse(res, 201, data);
});

export default router;
