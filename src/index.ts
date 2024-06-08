import express from 'express';
import bodyParser from 'body-parser';

import clientRoutes from './routes/clientRoutes';
import companyRoutes from './routes/companyRoutes';
import floorRoutes from './routes/floorRoutes';
import mediaRoutes from './routes/mediaRoutes';
import personRoutes from './routes/personRoutes';
import roomRoutes from './routes/roomRoutes';
import userRoutes from './routes/userRoutes'

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', clientRoutes);
app.use('/', companyRoutes);
app.use('/', floorRoutes);
app.use('/', mediaRoutes);
app.use('/', personRoutes);
app.use('/', roomRoutes);
app.use('/', userRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});