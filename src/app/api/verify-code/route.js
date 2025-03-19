import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";

export async function POST(req) {
  try {
    const client = await connectDB();
    const db = client.db();
    const { code, email } = await req.json();

    console.log('Searching for verification:', { code, email });

    const verification = await db.collection("verifications").findOne({
      code,
      email,
      expires: { $gt: new Date() }
    });

    console.log('Found verification:', verification);

    if (!verification) {
      const expiredVerification = await db.collection("verifications").findOne({ 
        code,
        email 
      });
      
      if (expiredVerification) {
        return NextResponse.json(
          { error: "Verification code has expired. Please request a new one." },
          { status: 400 }
        );
      }

      const codeExists = await db.collection("verifications").findOne({ code });
      if (codeExists) {
        return NextResponse.json(
          { error: "Invalid email for this verification code." },
          { status: 400 }
        );
      }

      return NextResponse.json(
        { error: "Invalid verification code" },
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
        Subject: "New Verified Wesbite Inquiry",
        HtmlBody: `
          <h2>New Wesbite Inquiry</h2>
          <p><strong>Email:</strong> ${verification.email}</p>
          <p><strong>Source Page:</strong> ${verification.formData.sourcePage}</p>
          ${verification.formData.serviceContext ? `<p><strong>Service Context:</strong> ${verification.formData.serviceContext}</p>` : ''}
          <p><strong>Experience:</strong> ${verification.formData.experience}</p>
          <p><strong>Interests:</strong> ${verification.formData.interests.join(", ")}</p>
          <p><strong>Goals:</strong></p>
          <p>${verification.formData.goals}</p>
        `,
        MessageStream: "outbound",
      }),
    });

    if (!response.ok) {
      throw new Error(`Postmark API error: ${response.statusText}`);
    }

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
