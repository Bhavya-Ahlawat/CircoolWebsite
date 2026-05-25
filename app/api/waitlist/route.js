import nodemailer from "nodemailer";

export async function POST() {
  return Response.json({
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  });
}