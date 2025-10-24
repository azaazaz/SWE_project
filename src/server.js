// src/server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from public (if you add a public/ folder)
app.use(express.static(path.join(__dirname, 'public')));

// Simple API endpoint to sanity-check the server
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'SushiMatch backend running' });
});

// Example: endpoint to return questions (we'll replace this with real data later)
app.get('/api/questions', (req, res) => {
  res.json({ message: 'Add your quizQuestions.json and serve it here.' });
});

// only start the server when this file is run directly (useful for tests)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
}

// export app for testing or programmatic use
module.exports = app;
