import express from 'express';
import { registerControllers, loginControllers, refreshTokenControllers } from '../controllers/authControllers';

const router = express.Router();

router.post('/login', loginControllers);
router.post('/refreshToken', refreshTokenControllers);
router.post('/register', registerControllers);

export default router;