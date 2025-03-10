export const forgotPassword = async (email: string) => {
  try {
    const res = await fetch("/api/user/forget-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.error || "Failed to send reset link.");
    }

    return { success: true, message: "Link sent successfully via email" };
  } catch (error) {
    return { success: false, message: (error as Error).message };
  }
};

export const resetPassword = async (token: string, newPassword: string) => {
  try {
    const res = await fetch("/api/user/reset-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, newPassword }),
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.error || "Failed to reset password.");
    }

    return { success: true, message: "Password reset successfully!" };
  } catch (error) {
    return { success: false, message: (error as Error).message };
  }
};
