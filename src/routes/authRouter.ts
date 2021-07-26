import express from 'express';
const router = express.Router();

import { registerControllers, loginControllers, logoutControllers } from '../controllers/authControlles'

/** สมัคร */
router.post('/register', registerControllers);
/** เข้าระบบ */
router.post('/login', loginControllers);
/** ออกระบบ */
router.get('/logout', logoutControllers);

export default router;