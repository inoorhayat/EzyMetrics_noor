const express = require('express');
const { generateReport } = require('../controllers/reportController');

const router = express.Router();

router.post('/generate', async (req, res, next) => {
    try {
        console.log('POST /generate route hit');
        await generateReport(req, res);
    } catch (error) {
        console.error('Error in POST /generate route:', error);
        next(error);
    }
});

module.exports = router;
