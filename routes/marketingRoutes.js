const express = require('express');
const { getCampaigns } = require('../controllers/marketingController');

const router = express.Router();

router.get('/campaigns', async (req, res, next) => {
    try {
        console.log('GET /campaigns route hit');
        await getCampaigns(req, res);
    } catch (error) {
        console.error('Error in GET /campaigns route:', error);
        next(error);
    }
});

module.exports = router;
