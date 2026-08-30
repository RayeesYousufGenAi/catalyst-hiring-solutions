import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Catalyst Hiring Solutions',
    short_name: 'Catalyst Hiring',
    description: 'Premier Recruitment Agency & Executive Search in Dewas, MP & Across India.',
    start_url: '/',
    display: 'standalone',
    background_color: '#050e1d',
    theme_color: '#0047AB',
    icons: [
      {
        src: '/icon',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
