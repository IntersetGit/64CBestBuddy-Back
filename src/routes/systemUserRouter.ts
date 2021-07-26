import express from 'express';
const router = express.Router();

import {
    mangeUsersAccountControlles,
    delUserAccountControlles,
    getByidUserAccountControlles,
    addRoleControlles
} from '../controllers/systemUserControlles'
import authenticateToken from '../middleware/authenticateToken'

/** เพิ่มแก้ไขผู้ใช้ระบบ */
router.post('/mangeUsers', [authenticateToken], mangeUsersAccountControlles);
/** ลบผู้ใช้งานระบบ */
router.post('/delUser/:id', [authenticateToken], delUserAccountControlles);
/** เรียกข้อมูลผู้ใช้งาน */
router.post('/getByid/:id', [authenticateToken], getByidUserAccountControlles);
/** เพิ่มสิทธิ์ */
router.post('/addRole', [authenticateToken], addRoleControlles);


export default router;