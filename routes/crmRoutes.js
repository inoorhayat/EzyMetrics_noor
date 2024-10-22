const express = require('express');
const crmController = require('../controllers/crmController');
const router = express.Router();

router.get('/leads', async (req, res, next) => {
    try {
        console.log('GET /leads route hit');
        await crmController.getLeads(req, res);
    } catch (error) {
        console.error('Error in GET /leads route:', error);
        next(error);
    }
});

router.post('/leads', crmController.createLead);

module.exports = router;
