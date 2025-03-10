import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(req: Request) {
  try {
    const { token, newPassword } = await req.json();
    if (!token || !newPassword) {
      return NextResponse.json(
        { error: "Invalid or missing token" },
        { status: 400 }
      );
    }

    // Verify Token
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.RESET_PASSWORD_SECRET!);
    } catch (error) {
      console.error("Token verification error:", error);
      return NextResponse.json(
        { error: "Invalid or expired token" },
        { status: 400 }
      );
    }

    if (!decoded || typeof decoded !== "object" || !decoded.id) {
      return NextResponse.json({ error: "Invalid token" }, { status: 400 });
    }

    await connectDB();
    const user = await User.findById(decoded.id);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Hash new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    // Update password in database
    user.password = hashedPassword;
    await user.save();

    return NextResponse.json(
      { message: "Password reset successful" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Reset Password Error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
