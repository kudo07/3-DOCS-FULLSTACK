import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import db from './db/models';
import env from './config/env.config';
import router from './routes';

dotenv.config({ path: '.env.development' }); // Load environment variables

const app: Express = express();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use(router);

const port = env.PORT || 8000; // Use default port if env var is missing

// Sync database and handle any potential sync errors
(async () => {
  try {
    await db.sequelize.sync(); // Sync models to database
    console.log('Database tables created or verified.');
  } catch (error) {
    console.error('Error syncing database:', error);
  }
})();

// Test route
app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript server is running smoothly');
});

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: Function) => {
  console.error('Server error:', err);
  res.status(500).json({ message: err });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
