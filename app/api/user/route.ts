import { NextResponse } from "next/server";
import { auth } from "~/lib/auth";

export const GET = auth(async (req) => {
  if (req.auth) return NextResponse.json(req.auth);
  return NextResponse.json({ message: "Not Authenticated" }, { status: 401 });
});
