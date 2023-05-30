const nodemailer = require('nodemailer');


// Create a transporter using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 465,
    secure: true,
    auth: {
      user: '-----', // Your Gmail email address
      pass: '-----' // Your Gmail password or app-specific password
    }
});


async function sendEmail(receiver, subject, message) {
  // Set up email data
  let mailOptions = {
    from: '-----', // Sender address
    to: '-----', // List of recipients
    subject: 'Test Email', // Subject line
    text: 'Hello, this is a test email!' // Plain text body
  };

  try {
    // Send the email
    let info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
  } catch (error) {
    console.log('Error occurred while sending email: ' + error.message);
  }
}

module.exports = sendEmail;
