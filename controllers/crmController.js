const Lead = require('../models/lead');

exports.getLeads = async (req, res) => {
    try {
        const leads = await Lead.find();
        res.status(200).json(leads);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching leads' });
    }
};

exports.createLead = async (req, res) => {
    console.log("Received data:", req.body);
    try {
        const leadData = req.body;
        const newLead = new Lead(leadData);
        await newLead.save();
        res.status(201).json({ message: 'Lead created successfully', data: newLead });
    } catch (error) {
        console.error("Error creating lead:", error.message);
        console.error("Full error object:", error);
        if (error.name === 'ValidationError') {
            return res.status(400).json({ message: 'Validation error', errors: error.errors });
        }
        res.status(500).json({ message: 'Internal server error' });
    }
};

