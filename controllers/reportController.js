const Report = require('../models/report');
const pdfkit = require('pdfkit');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

exports.generateReport = async (req, res) => {
    try {
        console.log("Generating report...");
        console.log("Request body:", req.body);

        console.log("Report generated successfully");
        res.status(200).json({ message: 'Report generated successfully' });
    } catch (error) {
        console.error("Error generating report:", error);
        res.status(500).json({ 
            message: "An error occurred while generating the report",
            error: error.message 
        });
    }
};
