const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

// ===============================
// EMAIL CONFIG
// ===============================
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ===============================
// API ROUTES
// ===============================

// Health check (important for Render)
app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

// Inquiry API
app.post("/api/inquiry", async (req, res) => {
  const { name, org, subject, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `🚨 New Inquiry from ${name}`,
    html: `
      <h2>New Inquiry</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Organization:</b> ${org}</p>
      <p><b>Subject:</b> ${subject}</p>
      <p><b>Message:</b> ${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email Error:", error);
    res.status(500).json({ success: false });
  }
});

// ===============================
// START SERVER
// ===============================
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
