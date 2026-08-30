import { NextResponse } from 'next/server';
import { saveEmployerLead } from '@/lib/dataStore';
import { sendEmployerLeadEmail } from '@/lib/mail';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { companyName, contactPerson, email, phone, rolesNeeded, teamSize, message } = body;

    if (!companyName || !contactPerson || !email || !phone || !rolesNeeded) {
      return NextResponse.json({ success: false, error: 'All required fields must be provided.' }, { status: 400 });
    }

    const result = await saveEmployerLead({
      companyName,
      contactPerson,
      email,
      phone,
      rolesNeeded,
      teamSize,
      message,
    });

    // Send instant email notification via Resend
    await sendEmployerLeadEmail({
      companyName,
      contactPerson,
      email,
      phone,
      rolesNeeded,
      teamSize,
      message,
    });

    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
