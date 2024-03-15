import express from 'express';
import blogRoute from './blog.routes';
import likeroute from './likeroute'
import commentRoutes from './commentroutes';
import querriesRoutes from './querriesroutes';
import usersRoutes from './usersroutes';

const router = express.Router();

router.use('/blogs',blogRoute);
router.use('/blogs',likeroute);
router.use('/blogs',commentRoutes);
router.use("/mybrand",querriesRoutes);
router.use("/mybrand",usersRoutes);


export default router;