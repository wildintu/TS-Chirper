import * as express from 'express';
// import chirpsStore from './chirpstore';

const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json('World');
});

export default router;