import { NextResponse } from 'next/server';
import { saveApplication } from '@/lib/dataStore';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const jobId = formData.get('jobId') as string;
    const jobTitle = formData.get('jobTitle') as string;
    const fullName = formData.get('fullName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const currentLocation = formData.get('currentLocation') as string;
    const experienceYears = formData.get('experienceYears') as string;
    const coverNote = (formData.get('coverNote') as string) || '';
    const resumeFile = formData.get('resume') as File | null;

    if (!fullName || !email || !phone) {
      return NextResponse.json({ success: false, error: 'Required fields missing' }, { status: 400 });
    }

    const resumeFileName = resumeFile ? resumeFile.name : 'resume.pdf';

    const result = await saveApplication({
      jobId: jobId || 'general',
      jobTitle: jobTitle || 'General Application',
      fullName,
      email,
      phone,
      currentLocation: currentLocation || 'India',
      experienceYears: experienceYears || '0-1',
      resumeFileName,
      coverNote,
    });

    // Optional email notification hook (Resend API key check)
    if (process.env.RESEND_API_KEY) {
      console.log(`[Resend Notification] Candidate application received for ${jobTitle} from ${fullName} (${email})`);
    }

    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
