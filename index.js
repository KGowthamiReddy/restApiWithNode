import express from 'express';
import bodyParser from 'body-parser';

import userRoutes from './routes/users.js';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/users', userRoutes);

app.get('/', (req, res) => {
    res.send(`hello from homepage`);
})

app.listen(PORT, () => {
    console.log(`server started to run at ${PORT}`);
});