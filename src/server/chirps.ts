import * as express from 'express';
import chirpsStore from './chirpstore';

const router = express.Router();

router.get('/api/chirps/:id?', (req, res) => {
    let id = req.params.id;
    if(id) {
        res.json(chirpsStore.GetChirp(id));
    } else {
        res.send(chirpsStore.GetChirps());
    }
})

router.post('/api/chirps/:id?', (req, res) => {
    chirpsStore.CreateChirp(req.body);
    res.sendStatus(200);
})

router.put('/api/chirps/:id?', (req, res) => {
    let id = req.params.id
        if(id) {
            res.json(chirpsStore.UpdateChirp(id,req.body));
            res.sendStatus(200);
        } else {
            res.send(chirpsStore.UpdateChirp());
        }     
})

router.delete('/api/chirps/:id?', (req,res) => {
    let id = req.params.id;
    if(id) {
        res.json(chirpsStore.DeleteChirp(id));
    } else {
        res.send(chirpsStore.DeleteChirp());
    }
})

export default router;