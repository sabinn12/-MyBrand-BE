import express from 'express';
import blogRoute from './routes';
import likeroute from './likeroute'
import commentRoutes from './commentroutes';
const router = express.Router();
router.use('/blogs',blogRoute);
router.use('/blogs',likeroute);
router.use('/blogs',commentRoutes)
export default router;