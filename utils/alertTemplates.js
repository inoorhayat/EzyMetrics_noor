const nodemailer = require('nodemailer');
const alertTemplates = require('../utils/alertTemplates');

exports.sendAlert = async (alertType, recipientEmail) => {
    const transporter = nodemailer.createTransport({
    });

    const mailOptions = {
        from: 'your_email@example.com',
        to: recipientEmail,
        subject: `Alert: ${alertType}`,
        text: alertTemplates[alertType] || 'Default alert message.',
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Alert sent successfully');
    } catch (error) {
        console.error('Error sending alert:', error);
    }
};
