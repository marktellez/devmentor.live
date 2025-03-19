import { NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";

export async function POST(req) {
  try {
    const client = await connectDB();
    const db = client.db();
    const { email, formData } = await req.json();

    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();

    // Store ALL the data in MongoDB
    await db.collection("verifications").insertOne({
      email,
      code: verificationCode,
      formData: {
        ...formData,
        sourcePage: formData.sourcePage,
        serviceContext: formData.serviceContext
      },
      expires: new Date(Date.now() + 30 * 60 * 1000),
      createdAt: new Date()
    });

    // Send verification email
    const verificationUrl = `${process.env.NEXT_PUBLIC_URL}${formData.sourcePage}?code=${verificationCode}&email=${encodeURIComponent(email)}#contact-form`;

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
          <p>Click the button below to verify your email and complete your submission:</p>
          <p><a href="${verificationUrl}" style="display: inline-block; background: #9333ea; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none;">Verify Email</a></p>
          <p>Or enter this code: <strong>${verificationCode}</strong></p>
          <p>This code will expire in 10 minutes.</p>
        `,
        MessageStream: "outbound",
      }),
    });

    if (!response.ok) {
      throw new Error(`Postmark API error: ${response.statusText}`);
    }

    return NextResponse.json({
      success: true
    });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Failed to send verification email" },
      { status: 500 }
    );
  }
}
