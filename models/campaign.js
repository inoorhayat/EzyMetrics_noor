const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
    title: { type: String, required: true },
    budget: { type: Number, required: true },
    leads: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Lead' }]
}, { timestamps: true });

module.exports = mongoose.model('Campaign', campaignSchema);
