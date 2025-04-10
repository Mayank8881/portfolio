// src/pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../lib/mongodb";
import { sendEmail, SendEmailParams } from "../../lib/nodemailer";

type Data = {
  success?: boolean;
  message?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body as SendEmailParams;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Send email using Nodemailer
    await sendEmail({ name, email, message });

    // Save submission to MongoDB
    const client = await clientPromise;
    const db = client.db(); // default database
    const collection = db.collection("contacts");

    await collection.insertOne({ name, email, message, createdAt: new Date() });

    return res
      .status(200)
      .json({ success: true, message: "Your message has been sent." });
  } catch (error) {
    console.error("Error handling contact submission:", error);
    return res
      .status(500)
      .json({ error: "Server error. Please try again later." });
  }
}
