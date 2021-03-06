import express from 'express';
let router = express.Router();

// import authenticate from '../middlewares/authenticate';
import apiRouter from './api' ;

router.use('/api/v1/' , apiRouter);

router.get('/', (req, res) => {
    res.json({
      message: 'Hello world!'
    })
});

export default router;
