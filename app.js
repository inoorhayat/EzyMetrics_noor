const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');


dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5001; // Change 5000 to 5001 or any other available port

// Middleware
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Database connected successfully'))
    .catch((err) => console.error('Database connection failed:', err));

mongoose.set('strictQuery', false); // or true, depending on your preference

// Import routes
const crmRoutes = require('./routes/crmRoutes');
const marketingRoutes = require('./routes/marketingRoutes');
const reportRoutes = require('./routes/reportRoutes');

// Use routes 
app.use('/api/crm', crmRoutes);
app.use('/api/marketing', marketingRoutes);
app.use('/api/reports', reportRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

process.on('unhandledRejection', (reason, promise) => {
    console.log('Unhandled Rejection at:', promise, 'reason:', reason);
});
