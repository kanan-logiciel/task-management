import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import jwt from "jsonwebtoken";
import { sendPasswordResetEmail } from "@/lib/nodemailer";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    await connectDB();
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { error: "User not found. Please sign up first." },
        { status: 404 }
      );
    }

    if (!process.env.RESET_PASSWORD_SECRET) {
      return NextResponse.json(
        { error: "Server misconfiguration. Please try again later." },
        { status: 500 }
      );
    }

    // Generate Reset Token
    let token;
    try {
      token = jwt.sign({ id: user._id }, process.env.RESET_PASSWORD_SECRET, {
        expiresIn: "1h",
      });
    } catch {
      return NextResponse.json(
        { error: "Failed to generate reset token." },
        { status: 500 }
      );
    }

    // Send Email
    try {
      const emailSent = await sendPasswordResetEmail(email, token);
      if (!emailSent) {
        return NextResponse.json(
          { error: "Failed to send email" },
          { status: 500 }
        );
      }
    } catch {
      return NextResponse.json(
        { error: "Error sending reset email." },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: "Reset email sent!" }, { status: 200 });
  } catch (error) {
    console.error("Forget Password Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
