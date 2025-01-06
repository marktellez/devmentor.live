import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { to, subject, experience, interests, goals, email } =
      await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_FROM,
      to,
      subject,
      text: `
New Mentorship Inquiry

Experience Level: ${experience}
Areas of Interest: ${interests.join(", ")}

Goals:
${goals}

Contact Email: ${email}
      `,
      html: `
        <h2>New Mentorship Inquiry</h2>
        
        <p><strong>Experience Level:</strong> ${experience}</p>
        
        <p><strong>Areas of Interest:</strong></p>
        <ul>
          ${interests.map((interest) => `<li>${interest}</li>`).join("")}
        </ul>
        
        <p><strong>Goals:</strong></p>
        <p>${goals}</p>
        
        <p><strong>Contact Email:</strong> ${email}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
