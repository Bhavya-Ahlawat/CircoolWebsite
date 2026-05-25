import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Waiting List Submission",
      html: `
        <h2>New Waiting List Submission</h2>

        <p><strong>Full Name:</strong> ${body.fullName}</p>

        <p><strong>Email:</strong> ${body.email}</p>

        <p><strong>Country:</strong> ${body.country}</p>

        <p><strong>Role:</strong> ${body.role}</p>

        <p><strong>Receive Updates:</strong> ${
          body.updates ? "Yes" : "No"
        }</p>
      `,
    });

    return Response.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
  console.error("MAIL ERROR FULL:", error);
  console.error("STACK:", error?.stack);

  return Response.json(
    {
      success: false,
      message: error.message,
      fullError: error,
    },
    { status: 500 }
  );
}
}