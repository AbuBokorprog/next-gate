import { database } from "@/utils/database/database";
import { NextResponse } from "next/server";
database();
export async function POST(req) {
  const response = NextResponse.json({
    success: "Logout successfully",
    status: 200,
  });

  response.cookies.delete("NextGate");
  return response;
}
