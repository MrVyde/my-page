import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, message, token } = body;

  if (!token) {
    return NextResponse.json({ error: 'Missing reCAPTCHA token' }, { status: 400 });
  }

  // 1️⃣ Verify token with Google
  try {
    const verifyRes = await fetch(
      'https://www.google.com/recaptcha/api/siteverify',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
      }
    );

    const verifyData = await verifyRes.json();

    console.log('reCAPTCHA verify response:', verifyData);
    if (!verifyData.success) {
      return NextResponse.json({ error: 'reCAPTCHA verification failed' }, { status: 403 });
    }

    // Optional: check score if using v3
    if (verifyData.score && verifyData.score < 0.5) {
      return NextResponse.json({ error: 'Low reCAPTCHA score' }, { status: 403 });
    }
  } catch (err) {
    console.error('reCAPTCHA verify failed:', err);
    return NextResponse.json({ error: 'Could not verify reCAPTCHA' }, { status: 502 });
  }

  // 2️⃣ Forward only the clean data to Formspree
  const formData = new URLSearchParams();
  formData.append('name', name);
  formData.append('email', email);
  formData.append('message', message);

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
