import User from "@/models/users";
import { database } from "@/utils/database/database";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

database();
export async function POST(req, res) {
  const { name, email, password, photoURL } = await req.json();
  const user = new User({ name, email, password, photoURL });
  try {
    const result = await user.save();
    const token = jwt.sign(
      {
        _id: user._id,
        name: user.name,
      },
      process.env.JWT_KEY
    );
    const response = NextResponse.json({
      success: "Users Created successfully",
      status: 200,
      user: result,
    });
    response.cookies.set("NextGate", token, {
      expireIn: "1d",
      httpOnly: true,
    });
    return response;
  } catch (error) {
    return NextResponse.json({
      error: error.message,
      status: false,
    });
  }
}
export async function GET(req, res) {
  try {
    const user = await User.find();
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({
      error: error.message,
      status: false,
    });
  }
}
