import { Router } from 'express';
import { ApiResponse } from '../types/response.type';
import { UserRef } from '../types/userRef.type';
import { sendError } from '../helpers/sendError';
import { sendReponse } from '../helpers/sendReponse';
import { supabase } from '..';

const router = Router();

router.get('/', async (req, res) => {
  const { data, error } = await supabase.from("userRef").select("*");

  if (error) {
    sendError(res, 500, 'Error on get all usersRef from db');
  }

  sendReponse(res, 200, data);
});

router.get('/by-ids', async (req, res) => {
  try {
    const idsParam = req.query.ids as string;

    if (!idsParam) {
      return sendError(res, 400, 'Parameter "ids" is required');
    }

    const ids = idsParam.split(',').map(id => {
      const num = parseInt(id.trim());
      if (isNaN(num)) throw new Error('Invalid ID format');
      return num;
    });

    const { data, error } = await supabase
      .from("userRef")
      .select("*")
      .in("id", ids);

    if (error) {
      return sendError(res, 500, 'Error on get userRefs by ids');
    }

    sendReponse(res, 200, data);
  } catch (error) {
    const msg = error instanceof Error ? error.message : 'Invalid request';
    sendError(res, 500, msg);
  }
});

router.post('/add', async (req, res) => {
  const userRef: UserRef = req.body;

  const { data, error } = await supabase.from("userRef").insert([userRef]);

  if (error) {
    console.log('error', error);
    return sendError(res, 500, 'Error adding userRef to the database');
  }

  sendReponse(res, 201, data);
});

export default router;
