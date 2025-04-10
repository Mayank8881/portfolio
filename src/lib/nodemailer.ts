// src/lib/nodemailer.ts
import nodemailer from 'nodemailer';

export interface SendEmailParams {
  name: string;
  email: string;
  message: string;
}

export async function sendEmail({ name, email, message }: SendEmailParams) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // e.g., smtp.gmail.com
    port: Number(process.env.SMTP_PORT), // e.g., 465
    secure: process.env.SMTP_SECURE === 'true', // true for 465 port, false for others
    auth: {
      user: process.env.SMTP_USER, // SMTP username
      pass: process.env.SMTP_PASS, // SMTP password
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.CONTACT_RECEIVER_EMAIL, // recipient’s email defined in env
    subject: `Contact form submission from ${name}`,
    text: message,
    html: `<p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Message:</strong><br />${message}</p>`,
  };

  return transporter.sendMail(mailOptions);
}
