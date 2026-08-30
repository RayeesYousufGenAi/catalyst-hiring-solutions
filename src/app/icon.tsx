import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: 'linear-gradient(135deg, #0047AB 0%, #002D62 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '8px',
          border: '1.5px solid #d4af37',
          color: '#ffffff',
          fontWeight: 900,
          fontFamily: 'sans-serif',
        }}
      >
        <span style={{ color: '#F59E0B', marginRight: '1px' }}>C</span>
      </div>
    ),
    {
      ...size,
    }
  );
}
