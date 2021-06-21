import express from 'express';
import blogControllers from '../controllers/blogControllers'
import authenticateToken from '../middleware/authenticateToken'

const router = express.Router();

/** เพิ่มแก้ไข สมัครงาน */
router.post('/manageBlog', [authenticateToken], blogControllers.manageBlog);


router.get('/getAllDataBlog', blogControllers.manageBlog);

export default router;