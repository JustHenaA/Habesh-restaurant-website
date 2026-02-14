import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = (await request.json()) as Record<string, string>;

  if (!body.name || !body.email || !body.phone || !body.date || !body.time || !body.guests) {
    return NextResponse.json({ message: "Please complete all required fields." }, { status: 400 });
  }

  return NextResponse.json(
    {
      message: `Thanks, ${body.name}! Your reservation request has been received.`
    },
    { status: 200 }
  );
}
