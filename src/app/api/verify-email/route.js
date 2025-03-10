import { NextResponse } from "next/server";
import crypto from "crypto";
import { connectDB } from "@/lib/mongodb";

export async function POST(req) {
  try {
    const client = await connectDB();
    const db = client.db();
    const { email, formData } = await req.json();

    // Generate a 6-digit verification code
    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();

    // Store in MongoDB
    await db.collection("verifications").insertOne({
      email,
      code: verificationCode,
      formData,
      expires: new Date(Date.now() + 30 * 60 * 1000),
    });

    const response = await fetch("https://api.postmarkapp.com/email", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Postmark-Server-Token": process.env.POSTMARK_API_KEY,
      },
      body: JSON.stringify({
        From: process.env.EMAIL_FROM,
        To: email,
        Subject: "Verify your email - DevmentorLive",
        HtmlBody: `
          <h2>Verify Your Email</h2>
          <p>Your verification code is: <strong>${verificationCode}</strong></p>
          <p>This code will expire in 30 minutes.</p>
        `,
        MessageStream: "outbound",
      }),
    });

    if (!response.ok) {
      throw new Error(`Postmark API error: ${response.statusText}`);
    }

    return NextResponse.json({
      success: true,
      code: verificationCode,
    });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Failed to send verification email" },
      { status: 500 }
    );
  }
}
