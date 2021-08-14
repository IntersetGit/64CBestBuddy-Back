import express from 'express';
const router = express.Router();
import demoControlles from '../controllers/demoControlles';


/** เพิ่มแก้ไข ประกัน */
router.get('/demo', demoControlles.demo);


export default router;