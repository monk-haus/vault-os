import { NextResponse } from 'next/server';

export const runtime = 'edge';

const VALID_FOCUS_VALUES = ['merchandising', 'retail_ops', 'clienteling', 'executive'];
const MAX_FIELD_LENGTH = 500;
const MAX_INQUIRY_LENGTH = 5000;

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

export async function POST(request: Request) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL || 'your-email@example.com';

  if (!resendApiKey) {
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
  }

  try {
    const body = await request.json();
    const { name, org, role, focus, inquiry } = body;

    if (
      typeof name !== 'string' || !name.trim() ||
      typeof org !== 'string' || !org.trim() ||
      typeof role !== 'string' || !role.trim() ||
      typeof focus !== 'string' || !focus.trim() ||
      typeof inquiry !== 'string'
    ) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    if (
      name.length > MAX_FIELD_LENGTH ||
      org.length > MAX_FIELD_LENGTH ||
      role.length > MAX_FIELD_LENGTH ||
      inquiry.length > MAX_INQUIRY_LENGTH
    ) {
      return NextResponse.json({ error: 'Input exceeds maximum length' }, { status: 400 });
    }

    if (!VALID_FOCUS_VALUES.includes(focus)) {
      return NextResponse.json({ error: 'Invalid focus value' }, { status: 400 });
    }

    const safeName = escapeHtml(name.trim());
    const safeOrg = escapeHtml(org.trim());
    const safeRole = escapeHtml(role.trim());
    const safeFocus = escapeHtml(focus.trim());
    const safeInquiry = escapeHtml(inquiry.trim());

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: 'VAULT INQUIRY <onboarding@resend.dev>',
        to: contactEmail,
        subject: `[Access Request] ${safeOrg} - ${safeFocus}`,
        html: `
                    <div style="font-family: sans-serif; padding: 20px; background-color: #f4f1ea; color: #111;">
                    <h1 style="font-family: serif; border-bottom: 1px solid #ccc; padding-bottom: 10px;">New Enterprise Inquiry</h1>
                    <p><strong>Name:</strong> ${safeName}</p>
                    <p><strong>Organization:</strong> ${safeOrg}</p>
                    <p><strong>Role:</strong> ${safeRole}</p>
                    <p><strong>Focus:</strong> ${safeFocus}</p>
                    <div style="margin-top: 20px; padding: 15px; background-color: #fff; border: 1px solid #ddd;">
                        <strong>Inquiry:</strong><br/>
                        ${safeInquiry}
                    </div>
                    </div>
                `,
      }),
    });

    if (!res.ok) {
      return NextResponse.json({ error: 'Email provider rejected request' }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);

  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
