import express from 'express';
import bodyParser from 'body-parser';
import itemRoutes from './routes/itemRoutes';
import connectDB from './config/database';

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', itemRoutes);

// Connect to Database
connectDB();

export default app;