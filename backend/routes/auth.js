import express from 'express';
import { createUserOtp, login, register } from '../controllers/auth.js';
// import verifyEmail from '../verifyUserOtp.js';

const router = express.Router();

router.post('/register',register);
router.get('/generateOtp',createUserOtp)
router.post('/login',login);

export default router