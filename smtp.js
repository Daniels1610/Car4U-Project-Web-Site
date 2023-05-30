const nodemailer = require('nodemailer');

async function sendEmail() {
  // Create a transporter using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com', // Your email address
      pass: 'your-password' // Your email password or app-specific password
    }
  });

  // Set up email data
  let mailOptions = {
    from: 'your-email@gmail.com', // Sender address
    to: 'recipient@example.com', // List of recipients
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

sendEmail();