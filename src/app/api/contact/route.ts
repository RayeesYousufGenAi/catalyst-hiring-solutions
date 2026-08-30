import { NextResponse } from 'next/server';
import { sendContactMessageEmail } from '@/lib/mail';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json({ success: false, error: 'All required fields must be filled.' }, { status: 400 });
    }

    // Send email notification via Resend
    await sendContactMessageEmail({
      name,
      email,
      phone,
      subject: subject || 'General Inquiry',
      message,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
