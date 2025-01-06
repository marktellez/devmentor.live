import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";

export async function POST(req) {
  try {
    const client = await connectDB();
    const db = client.db();
    const { email, code } = await req.json();

    const verification = await db.collection("verifications").findOne({
      email,
      code,
      expires: { $gt: new Date() },
    });

    if (!verification) {
      return NextResponse.json(
        { error: "Invalid or expired verification code" },
        { status: 400 }
      );
    }

    const response = await fetch("https://api.postmarkapp.com/email", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Postmark-Server-Token": process.env.POSTMARK_API_KEY,
      },
      body: JSON.stringify({
        From: process.env.EMAIL_FROM,
        To: "mark+info@devmentor.live",
        Subject: "New Verified Mentorship Inquiry",
        HtmlBody: `
          <h2>New Mentorship Inquiry</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Experience:</strong> ${
            verification.formData.experience
          }</p>
          <p><strong>Interests:</strong> ${verification.formData.interests.join(
            ", "
          )}</p>
          <p><strong>Goals:</strong></p>
          <p>${verification.formData.goals}</p>
        `,
        MessageStream: "outbound",
      }),
    });

    if (!response.ok) {
      throw new Error(`Postmark API error: ${response.statusText}`);
    }

    // Clean up
    await db.collection("verifications").deleteOne({ _id: verification._id });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Verification error:", error);
    return NextResponse.json(
      { error: "Failed to verify code" },
      { status: 500 }
    );
  }
}
