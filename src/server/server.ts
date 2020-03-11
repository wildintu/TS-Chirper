import * as express from 'express';
import apiRouter from './routes';
import chirps from './chirps'

const app = express();

app.use(express.json())
app.use(express.static('public'));
app.use(apiRouter);
app.use(chirps);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));

