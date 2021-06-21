import express from 'express';
import blogControllers from '../controllers/blogControllers'
import authenticateToken from '../middleware/authenticateToken'

const router = express.Router();

/** เพิ่มแก้ไข สมัครงาน */
router.post('/manageBlog', [authenticateToken], blogControllers.manageBlogControllers);

/**  เรัยกข้อมูล Blog หรือ กิจกรรม หน้าเว็บ */
router.get('/getAllDataBlog', blogControllers.getAllDataBlogControllers);

/**  เรียกข้อมูล By id */
router.get('/getByIdBlog/:id', blogControllers.getByIdBlogControllers);

/**  เรียกข้อมูล By id */
router.get('/delBlog/:id', [authenticateToken], blogControllers.delBlogControllers);

export default router;