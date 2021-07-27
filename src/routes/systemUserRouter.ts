import express from 'express';
const router = express.Router();

import {
    mangeUsersAccountControlles,
    delUserAccountControlles,
    getByidUserAccountControlles,
    addRoleControlles,
    getAllUsersControlles
} from '../controllers/systemUserControlles'
import authenticateToken from '../middleware/authenticateToken'

/** เพิ่มแก้ไขผู้ใช้ระบบ */
router.post('/mangeUsers', [authenticateToken], mangeUsersAccountControlles);
/** ลบผู้ใช้งานระบบ */
router.get('/delUser/:id', [authenticateToken], delUserAccountControlles);
/** เรียกข้อมูลผู้ใช้งาน */
router.get('/getByid/:id', [authenticateToken], getByidUserAccountControlles);
/** เรียกข้อมูลผู้ใช้งานทั้งหมด */
router.get('/getAllUsers', [authenticateToken], getAllUsersControlles)
/** เพิ่มสิทธิ์ */
router.post('/addRole', [authenticateToken], addRoleControlles);


export default router;