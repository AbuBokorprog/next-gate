import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import User from "@/models/users";
export async function GET(req) {
  const token = req.cookies.get("NextGate")?.value;
  const { _id } = jwt.verify(token, process.env.JWT_KEY);
  const currentUser = await User.findById(_id);
  console.log(currentUser);
  return NextResponse.json(currentUser);
}
