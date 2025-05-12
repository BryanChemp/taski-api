import { Router } from 'express';
import { ApiResponse } from '../types/Response';
import { Board } from '../types/Board';
import { supabase } from '..';
import { sendError } from '../helpers/sendError';
import { sendReponse } from '../helpers/sendReponse';

const router = Router();

router.get('/', async (req, res) => {
    const { data, error } = await supabase
        .from("board")
        .select("*")

    if (error) {
        sendError(res, 500, 'Error on get boards from db');
    }

    sendReponse(res, 200, data);
});

router.get('/:userId', async (req, res) => {
    const userId = parseInt(req.params.userId);

    const { data, error } = await supabase
        .from("board")
        .select("*")
        .contains("membersId", [userId]);

    if (error) {
        return sendError(res, 500, 'Error on get boards by userId');
    }

    sendReponse(res, 200, data);
});

export default router;
