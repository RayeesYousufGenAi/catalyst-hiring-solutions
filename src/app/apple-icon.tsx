import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 100,
          background: 'linear-gradient(135deg, #0047AB 0%, #0a192f 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '36px',
          border: '6px solid #d4af37',
          color: '#ffffff',
          fontWeight: 900,
          fontFamily: 'sans-serif',
          boxShadow: '0 20px 40px rgba(0, 71, 171, 0.4)',
        }}
      >
        <span style={{ color: '#F59E0B' }}>C</span>
      </div>
    ),
    {
      ...size,
    }
  );
}
