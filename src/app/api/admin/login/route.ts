import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { password } = await request.json();
    const adminSecret = process.env.ADMIN_PASSWORD || 'admin123';

    if (password === adminSecret) {
      return NextResponse.json({ success: true, token: 'catalyst-admin-session-active' });
    } else {
      return NextResponse.json({ success: false, error: 'Invalid admin password' }, { status: 401 });
    }
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
