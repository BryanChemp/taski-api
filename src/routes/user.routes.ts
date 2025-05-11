import { Router } from 'express';
import { ApiResponse } from '../types/Response';
import { sendError } from '../helpers/sendError';
import { authenticateUser } from '../services/authService';
import { supabase } from '..';

const router = Router();

router.get('/', async (req, res) => {
    const { data, error } = await supabase.from("user").select("*");

    if (error) {
        res.status(500).json({ message: "Erro user", error: error.message });
    }

    res.status(200).json(data);
});

export default router;
