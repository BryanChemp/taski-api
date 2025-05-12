import { Router } from 'express';
import { supabase } from '..';
import { sendError } from '../helpers/sendError';
import { sendReponse } from '../helpers/sendReponse';
import { User } from '@supabase/supabase-js';

const router = Router();

router.get('/', async (req, res) => {
    const { data, error } = await supabase.from("user").select("*");

    if (error) {
        sendError(res, 500, 'Error on get all users from db');
    }

    sendReponse(res, 200, data);
});

router.post('/add', async (req, res) => {
  const user: User = req.body;

  const { data, error } = await supabase.from("user").insert([user]);

  if (error) {
    console.log('error', error);
    return sendError(res, 500, 'Error adding user to the database');
  }

  sendReponse(res, 201, data);
});

export default router;
