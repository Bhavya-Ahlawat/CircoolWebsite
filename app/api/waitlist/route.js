import nodemailer from "nodemailer";

export async function POST() {
  console.log("EMAIL_USER:", process.env.EMAIL_USER);
  console.log("EMAIL_PASS:", process.env.EMAIL_PASS);

  return Response.json({
    user: process.env.EMAIL_USER || "MISSING",
    pass: process.env.EMAIL_PASS || "MISSING",
  });
}