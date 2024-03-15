import express from 'express';
import blogRoute from './routes';
import likeroute from './likeroute'
import commentRoutes from './commentroutes';
import querriesRoutes from './querriesroutes';

const router = express.Router();

router.use('/blogs',blogRoute);
router.use('/blogs',likeroute);
router.use('/blogs',commentRoutes);
router.use("/mybrand",querriesRoutes);


export default router;