import express from 'express';
import { confirm_falcon } from '../controllers/falconControlles';
const router = express.Router();


router.get('/confirm', confirm_falcon)


export default router;