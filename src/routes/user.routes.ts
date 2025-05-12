import { Router } from 'express';
import { supabase } from '..';
import { sendError } from '../helpers/sendError';
import { sendReponse } from '../helpers/sendReponse';

const router = Router();

router.get('/', async (req, res) => {
    const { data, error } = await supabase.from("user").select("*");

    if (error) {
        sendError(res, 500, 'Error on get all users from db');
    }

    sendReponse(res, 200, data);
});

export default router;
