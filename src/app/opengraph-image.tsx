import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Catalyst Hiring Solutions | Recruitment Agency & Executive Search India';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #050e1d 0%, #0a192f 50%, #0047AB 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          padding: '60px 80px',
          fontFamily: 'sans-serif',
          color: '#ffffff',
        }}
      >
        {/* Brand Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '32px',
              fontWeight: '900',
              color: '#ffffff',
            }}
          >
            C
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '28px', fontWeight: '800', letterSpacing: '-0.5px' }}>
              Catalyst
            </span>
            <span style={{ fontSize: '13px', fontWeight: '700', color: '#94a3b8', letterSpacing: '2px', textTransform: 'uppercase' }}>
              Hiring Solutions
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '900px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(0, 71, 171, 0.4)',
              border: '1px solid rgba(245, 158, 11, 0.4)',
              borderRadius: '999px',
              padding: '6px 18px',
              fontSize: '14px',
              color: '#F59E0B',
              fontWeight: '700',
              width: 'fit-content',
            }}
          >
            ★ India's Premier Recruitment & Executive Search Partner
          </div>
          <h1
            style={{
              fontSize: '52px',
              fontWeight: '900',
              lineHeight: 1.15,
              letterSpacing: '-1.5px',
              margin: 0,
            }}
          >
            Building India's Next Great Teams
          </h1>
          <p
            style={{
              fontSize: '22px',
              color: '#cbd5e1',
              margin: 0,
              lineHeight: 1.4,
            }}
          >
            Work From Home Jobs • Executive Search • Technology & GCC Hiring • 21-Day Turnaround
          </p>
        </div>

        {/* Footer Metrics */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            borderTop: '1px solid rgba(255, 255, 255, 0.15)',
            paddingTop: '28px',
            fontSize: '16px',
            color: '#94a3b8',
          }}
        >
          <div style={{ display: 'flex', gap: '40px' }}>
            <div>
              <strong style={{ color: '#F59E0B', fontSize: '20px' }}>100,000+</strong> Candidates
            </div>
            <div>
              <strong style={{ color: '#F59E0B', fontSize: '20px' }}>500+</strong> Corporate Clients
            </div>
            <div>
              <strong style={{ color: '#F59E0B', fontSize: '20px' }}>21 Days</strong> Avg Time-to-Hire
            </div>
          </div>
          <div style={{ fontWeight: '700', color: '#ffffff' }}>
            www.catalysthiringsolutions.in
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
