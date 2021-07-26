import express from 'express';
const router = express.Router();

import {
    mangeUsersAccountControlles,
    delUserAccountControlles,
    getByidUserAccountControlles,
    addRoleControlles
} from '../controllers/systemUserControlles'

/** เพิ่มแก้ไขผู้ใช้ระบบ */
router.post('/mangeUsers', mangeUsersAccountControlles);
/** ลบผู้ใช้งานระบบ */
router.post('/delUser/:id', delUserAccountControlles);
/** เรียกข้อมูลผู้ใช้งาน */
router.post('/getByid/:id', getByidUserAccountControlles);
/** เพิ่มสิทธิ์ */
router.post('/addRole', addRoleControlles);


export default router;