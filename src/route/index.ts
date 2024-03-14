import express from 'express';
import blogRoute from './routes';
const router = express.Router();
router.use('/blogs',blogRoute);
export default router;