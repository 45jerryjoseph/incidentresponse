import express from 'express';
import verifyEmail from '../controllers/verifyUserOtp.js';
const router = express.Router();

router.post('/', verifyEmail);

export default router;