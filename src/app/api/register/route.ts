import { connect } from "@/lib/dbConfig";
import User from "@/models/auth";
import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await connect();
  try {
    const {
      name,
      email,
      password,
    }: { name: string; email: string; password: string } = await req.json();
    const ifUserExist = await User.findOne({ email });
    if (ifUserExist) {
      return NextResponse.json(
        { error: "User already exist" },
        { status: 400 }
      );
    }
    const slat = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, slat);

    const user = await new User({
      name,
      email,
      password: hashedPassword,
    });
    await user.save();
     
    return NextResponse.json({ message: "User registered" }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
