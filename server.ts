import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Mock API routes
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', time: new Date().toISOString() });
  });

  // Mock student data
  app.get('/api/student', (req, res) => {
    res.json({
      id: 'AL-2024-3',
      name: 'Marco Mojica',
      role: 'COMMERCIAL PILOT IN TRAINING',
      email: 'pilot@caelum.com',
      phone: '+52 (55) 1234 5678',
      address: 'Mexico City, CP 11560',
      theoreticalProgress: 85,
      flightHours: 42,
      totalHoursRequired: 180,
      expiredDocuments: [
        { name: 'Medical Class 1', status: 'EXPIRED' }
      ]
    });
  });

  // Mock dashboard stats
  app.get('/api/stats', (req, res) => {
    res.json({
      monthlyRevenue: 350000,
      revenueChange: 12,
      fleetOccupancy: 88,
      enrolledStudents: 132,
      newStudentsWeek: 5,
      instructionHours: 4120,
      financialSummary: [
        { day: 1, amount: 40000 },
        { day: 3, amount: 65000 },
        { day: 5, amount: 90000 },
        { day: 7, amount: 50000 },
        { day: 9, amount: 110000 },
        { day: 11, amount: 125000 },
        { day: 13, amount: 105000 },
        { day: 15, amount: 150000 },
        { day: 17, amount: 110000 },
        { day: 19, amount: 95000 },
        { day: 21, amount: 180000 },
        { day: 23, amount: 140000 },
        { day: 25, amount: 210000 },
        { day: 27, amount: 170000 },
        { day: 30, amount: 230000 },
      ]
    });
  });

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
