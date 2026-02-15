import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(request: Request) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL || 'your-email@example.com';

  if (!resendApiKey) {
    return NextResponse.json({ error: 'Server configuration error: Missing API Key' }, { status: 500 });
  }

  try {
    const body = await request.json();
    const { name, org, role, focus, inquiry } = body;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: 'VAULT INQUIRY <onboarding@resend.dev>',
        to: contactEmail,
        subject: `[Access Request] ${org} - ${focus}`,
        html: `
                    <div style="font-family: sans-serif; padding: 20px; background-color: #f4f1ea; color: #111;">
                    <h1 style="font-family: serif; border-bottom: 1px solid #ccc; padding-bottom: 10px;">New Enterprise Inquiry</h1>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Organization:</strong> ${org}</p>
                    <p><strong>Role:</strong> ${role}</p>
                    <p><strong>Focus:</strong> ${focus}</p>
                    <div style="margin-top: 20px; padding: 15px; background-color: #fff; border: 1px solid #ddd;">
                        <strong>Inquiry:</strong><br/>
                        ${inquiry}
                    </div>
                    </div>
                `,
      }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error('Resend API Error:', errorText);
      return NextResponse.json({ error: 'Email provider rejected request' }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);

  } catch (error) {
    console.error('Submission error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
