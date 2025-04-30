import { Router } from 'express';
import { ApiResponse } from '../types/Response';

const router = Router();

router.get('/', (req, res) => {
  res.json("");
});

router.post('/authenticate', (req, res) => {
    const { email, password } = req.body;

    if (email === 'bryan_chemp@hotmail.com' && password === '123bcoc123') {
        const response: ApiResponse<{ token: string }> = {
            status: 200,
            message: 'Login realizado com sucesso',
            data: { token: 'abc123' }
        };
        res.status(200).json(response);
    } else {
        const response: ApiResponse<{ token: string }> = {
            status: 404,
            message: 'Usuário não existe',
            data: undefined
        };
        res.status(404).json(response);
    }
})

export default router;
