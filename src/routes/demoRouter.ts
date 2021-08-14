import express from 'express';
const router = express.Router();
import demoControlles from '../controllers/demoControlles';


/** เพิ่มแก้ไข ประกัน */
router.get('/demo', demoControlles.demo);
router.get('/demo_prefix', demoControlles.demoPrefix);
router.get('/demo_occupation', demoControlles.demoOccupation);


export default router;