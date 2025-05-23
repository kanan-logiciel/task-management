import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Projects from "@/models/Projects";

export async function POST(req: Request) {
  try {
    await connectDB();
    const { name, language, dueDate, status } = await req.json();

    if (!name || !language || !dueDate || !status) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const newProject = new Projects({
      name,
      language,
      dueDate,
      status,
    });

    await newProject.save();

    return NextResponse.json(
      { message: "Project created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Project Creation Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
