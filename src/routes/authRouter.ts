import express from 'express';
const router = express.Router();

import { registerControllers, loginControllers, logoutControllers, refreshTokenControllers } from '../controllers/authControlles'

/** สมัคร */
router.post('/register', registerControllers);
/** เข้าระบบ */
router.post('/login', loginControllers);
/**  */
router.post('/refreshToken', refreshTokenControllers);
/** ออกระบบ */
router.get('/logout', logoutControllers);

export default router;