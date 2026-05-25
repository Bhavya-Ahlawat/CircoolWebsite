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
      subject: "New Newsletter Subscription",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          
          <h2 style="color:#0d46ff;">
            New Newsletter Subscriber
          </h2>

          <p>
            A new user subscribed to the CirCool newsletter.
          </p>

          <div style="margin-top:20px;">
            <p>
              <strong>Email Address:</strong>
              ${body.email}
            </p>
          </div>

          <hr style="margin:30px 0;" />

          <p style="color:#666; font-size:14px;">
            Add this email to the CirCool newsletter mailing list
            for future updates, launches, and announcements.
          </p>

        </div>
      `,
    });

    return Response.json({
      success: true,
      message: "Subscription successful",
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        message: "Failed to subscribe",
      },
      {
        status: 500,
      }
    );
  }
}