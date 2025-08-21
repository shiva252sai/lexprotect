import { RequestHandler } from "express";
import nodemailer from "nodemailer";

export const handleSendEvidenceEmail: RequestHandler = async (req, res) => {
  try {
    const { to, subject, body, attachment } = req.body;

    // Email configuration from environment variables
    const emailConfig = {
      service: process.env.EMAIL_SERVICE || 'gmail', // gmail, outlook, etc.
      user: process.env.EMAIL_USER, // your email address
      pass: process.env.EMAIL_PASS, // your email password or app password
    };

    // Check if email configuration is provided
    if (!emailConfig.user || !emailConfig.pass) {
      console.log('Email credentials not configured. Logging details instead:');
      console.log('To:', to);
      console.log('Subject:', subject);
      console.log('Body:', body);
      console.log('Attachment:', attachment?.filename);

      res.json({
        success: true,
        message: 'Evidence logged successfully (email not configured).'
      });
      return;
    }

    console.log('Attempting to send email with:', {
      service: emailConfig.service,
      user: emailConfig.user,
      to: to,
      hasAttachment: !!attachment
    });

    // Create transporter
    const transporter = nodemailer.createTransporter({
      service: emailConfig.service,
      auth: {
        user: emailConfig.user,
        pass: emailConfig.pass,
      },
    });

    // Prepare email options
    const mailOptions: any = {
      from: emailConfig.user,
      to: to,
      subject: subject,
      text: body,
    };

    // Add attachment if provided
    if (attachment && attachment.content) {
      // Remove data URL prefix if present
      const base64Data = attachment.content.replace(/^data:[^;]+;base64,/, '');

      mailOptions.attachments = [{
        filename: attachment.filename,
        content: base64Data,
        encoding: 'base64',
        contentType: attachment.contentType,
      }];
    }

    // Send email
    const info = await transporter.sendMail(mailOptions);

    console.log('Email sent successfully:', info.messageId);

    res.json({
      success: true,
      message: 'Evidence submitted successfully to authorities.',
      messageId: info.messageId
    });

  } catch (error) {
    console.error('Error sending evidence email:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send evidence email: ' + (error as Error).message
    });
  }
};
