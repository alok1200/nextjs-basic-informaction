import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    name: "Alok",
    email: "test@gmail.com",
  });
}
