import { NextResponse } from "next/server";

export async function POST(req, res) {
  console.log("data", await req.json());

  return NextResponse.json({ message: "OK" }, { status: 200 });
}
