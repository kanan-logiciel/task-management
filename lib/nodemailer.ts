import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER,
  port: Number(process.env.EMAIL_PORT),
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendPasswordResetEmail = async (
  email: string,
  token: string
): Promise<boolean> => {
  try {
    const resetLink = `${process.env.NEXTAUTH_URL}/auth/reset-password?token=${token}`;

    const mailOptions = {
      from: `"Task Manager" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Reset Your Password",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 500px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; background: #f9f9f9;">
          <h2 style="text-align: center; color: #333;">Reset Your Password</h2>
          <p style="color: #555;">Hello,</p>
          <p style="color: #555;">
            You recently requested to reset your password for your <b>Task Manager</b> account.
          </p>
          <p style="text-align: center;">
            <a href="${resetLink}" style="background: #4CAF50; color: white; text-decoration: none; padding: 12px 24px; border-radius: 5px; display: inline-block; font-size: 16px;">Reset Password</a>
          </p>
          <p style="color: #555;">
            If you didn't request this, please ignore this email. This link is valid for 30 minutes.
          </p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="color: #888; font-size: 12px; text-align: center;">
            Need help? <a href="mailto:support@yourdomain.com" style="color: #4CAF50;">Contact Support</a>
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return true;
  } catch {
    return false;
  }
};
