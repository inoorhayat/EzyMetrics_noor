const Campaign = require('../models/campaign');

exports.getCampaigns = async (req, res) => {
    try {
        console.log("Fetching campaigns...");
        const campaigns = await Campaign.find().populate('leads');
        console.log(`Found ${campaigns.length} campaigns`);
        res.json(campaigns);
    } catch (error) {
        console.error("Error fetching campaigns:", error);
        res.status(500).json({ 
            message: "An error occurred while fetching campaigns",
            error: error.message 
        });
    }
};

