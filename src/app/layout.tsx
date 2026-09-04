import type { Metadata, Viewport } from 'next';
import { Fraunces, Outfit } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd, {
  getOrganizationSchema,
  getLocalBusinessSchema,
  getWebSiteSchema,
} from '@/components/JsonLd';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#0a192f',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.catalysthiringsolutions.in'),
  title: {
    default: 'Catalyst Hiring Solutions | Recruitment Agency & Executive Search India',
    template: '%s | Catalyst Hiring Solutions',
  },
  description:
    'Leading recruitment agency & executive search firm in Dewas, Madhya Pradesh & Pan-India. Connecting 500+ top enterprises with 100,000+ pre-screened professionals. 21-day time-to-hire.',
  keywords: [
    'Work From Home Jobs India',
    'WFH Customer Support Jobs',
    'Customer Support Jobs',
    'Recruitment Agency India',
    'Executive Search Dewas',
    'Placement Agency Madhya Pradesh',
    'International BPO Jobs',
    'Non Voice Chat Support Jobs',
    'Voice Process Jobs',
    'Technical Support Jobs India',
    'BPO Jobs Gurugram',
    'IT Hiring India',
    'GCC Recruitment India',
    'Volume Hiring Solutions',
    'Recruitment Agency Bangalore',
    'Recruitment Agency Mumbai',
    'Recruitment Agency Pune',
    'Recruitment Agency Delhi NCR',
    'Catalyst Hiring Solutions',
  ],
  manifest: '/manifest.webmanifest',
  authors: [{ name: 'Catalyst Hiring Solutions', url: 'https://www.catalysthiringsolutions.in' }],
  creator: 'Catalyst Hiring Solutions',
  publisher: 'Catalyst Hiring Solutions',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.catalysthiringsolutions.in',
    siteName: 'Catalyst Hiring Solutions',
    title: 'Catalyst Hiring Solutions | Building India\'s Next Great Teams',
    description:
      'Connecting visionary Indian enterprises with top executive leadership and specialized talent. 21-day average time-to-hire with 100,000+ pre-vetted candidates.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Catalyst Hiring Solutions - Building India\'s Next Great Teams',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Catalyst Hiring Solutions | Recruitment Agency India',
    description:
      'Premier Executive Search & Volume Hiring consultancy in Dewas & across India.',
    images: ['/og-image.jpg'],
    creator: '@catalysthiring',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${fraunces.variable}`}>
      <head>
        <JsonLd data={getOrganizationSchema()} />
        <JsonLd data={getWebSiteSchema()} />
        <JsonLd data={getLocalBusinessSchema()} />
      </head>
      <body className="bg-hero-light text-navy-950 min-h-screen flex flex-col font-sans antialiased selection:bg-corp-500 selection:text-white">
        {/* Google Analytics 4 */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-D5VGP3D1GM"
        />
        <Script
          id="google-analytics-gtag"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-D5VGP3D1GM', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <Navbar />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
