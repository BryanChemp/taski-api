import { Router } from 'express';
import { ApiResponse } from '../types/Response';
import { TimeLog } from '../types/TimeLog';
import { supabase } from '..';
import { sendError } from '../helpers/sendError';
import { sendReponse } from '../helpers/sendReponse';

const router = Router();

router.get('/', async (req, res) => {
  const { data, error } = await supabase.from("timeLog").select("*");

  if (error) {
    sendError(res, 500, 'Error on get all timelogs from db');
  }

  sendReponse(res, 200, data);
});

router.post('/add', async (req, res) => {
  const timeLog: TimeLog = req.body;

  const { data, error } = await supabase.from("timeLog").insert([timeLog]);

  if (error) {
    console.log('error', error);
    return sendError(res, 500, 'Error adding timeLog to the database');
  }

  sendReponse(res, 201, data);
});

export default router;
