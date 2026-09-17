import { NextResponse } from "next/server";

/**
 * Enquiry endpoint. Validates server-side and issues a reference number.
 *
 * INTEGRATION POINT: forward the payload to the CRM here, with source
 * attribution, and queue for retry on failure rather than dropping.
 */
export async function POST(request: Request) {
  let payload: Record<string, unknown>;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const message = typeof payload.message === "string" ? payload.message.trim() : "";

  const errors: string[] = [];
  if (name.length < 2) errors.push("A name is required.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push("A valid email address is required.");
  if (message.length < 10) errors.push("Please tell us a little more.");
  if (payload.consent !== "on" && payload.consent !== true) errors.push("Consent is required.");

  if (errors.length > 0) return NextResponse.json({ errors }, { status: 422 });

  const reference = `EGF-${Date.now().toString(36).toUpperCase().slice(-6)}`;
  return NextResponse.json({ reference }, { status: 201 });
}
