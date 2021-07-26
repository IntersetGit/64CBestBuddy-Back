import express from 'express';
const router = express.Router();

import { mangeUsersAccount, delUserAccount } from '../controllers/systemUserControlles'

/** เพิ่มแก้ไขผู้ใช้ระบบ */
router.post('/mangeUsers', mangeUsersAccount)
/** ลบผู้ใช้งานระบบ */
router.post('/delUser/:id', delUserAccount)

export default router;