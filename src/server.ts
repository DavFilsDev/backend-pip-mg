import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

// Charger les variables d'environnement
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware de base
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route de base pour tester
app.get('/', (_req, res) => {
  res.json({
    message: 'API Plateforme d\'Insertion Professionnelle Madagascar',
    version: '1.0.0',
    status: 'running',
    timestamp: new Date().toISOString(),
  });
});

// Health check endpoint
app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: `Route ${req.method} ${req.path} not found`,
  });
});

// Error handler (basique)
app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong',
  });
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`=> Server running on port ${PORT}`);
  console.log(`=> Environment: ${process.env.NODE_ENV}`);
  console.log(`=> API URL: http://localhost:${PORT}`);
});