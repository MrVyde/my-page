import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, message, token } = body;

  if (!token) {
    return NextResponse.json({ error: 'Missing reCAPTCHA token' }, { status: 400 });
  }

  // ✅ Do NOT verify with Google — just forward the token to Formspree
  const formData = new URLSearchParams();
  formData.append('name', name);
  formData.append('email', email);
  formData.append('message', message);
  formData.append('g-recaptcha-response', token); // Formspree will verify this

  try {
    const formspreeRes = await fetch('https://formspree.io/f/mreqqnke', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: formData,
    });

    const result = await formspreeRes.json();

    if (formspreeRes.ok) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ error: result.error || 'Formspree error' }, { status: 500 });
    }
  } catch (err) {
    console.error('Formspree fetch failed:', err);
    return NextResponse.json({ error: 'Could not reach Formspree' }, { status: 502 });
  }
}