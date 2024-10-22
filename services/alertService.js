const nodemailer = require('nodemailer');
const alertTemplates = require('../utils/alertTemplates');

exports.sendAlert = async (alertType, recipientEmail) => {
    console.log(`Attempting to send ${alertType} alert to ${recipientEmail}`);
    const transporter = nodemailer.createTransport({
    });

    const mailOptions = {
        from: 'your_email@example.com',
        to: recipientEmail,
        subject: `Alert: ${alertType}`,
        text: alertTemplates[alertType] || 'Default alert message.',
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Alert sent successfully. Message ID:', info.messageId);
        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error('Error sending alert:', error);
        return { success: false, error: error.message };
    }
};
