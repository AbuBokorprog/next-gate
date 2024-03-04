import User from "@/models/users";
import { database } from "@/utils/database/database";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

database();
export async function POST(req, res) {
  const { email, password } = await req.json();
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return NextResponse.json({
        error: "User not found",
        status: 404,
      });
    }

    const token = await jwt.sign(
      {
        _id: user._id,
        name: user.name,
      },
      process.env.JWT_KEY
    );
    const response = NextResponse.json({
      success: "User Signed",
      status: 200,
      user: user,
    });

    response.cookies.set("NextGate", token, {
      expiresIn: "1d",
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
