// import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import prismaClient from "../../../lib/db";

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
