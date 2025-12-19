import { PrismaClient } from "@prima/client";
import { NextRequest, NextResponse } from "next/server";

const prismaClient = new PrismaClient();

export async function POST(req: NextRequest) {
  const data = await req.json();

  await prismaClient.user.create({
    data: {
      name: data.name,
      password: data.password,
    },
  });

  return NextResponse.json({
    message: "you have signed up successfully",
  });
}
