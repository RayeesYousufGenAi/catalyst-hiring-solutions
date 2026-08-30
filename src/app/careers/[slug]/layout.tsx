import { Metadata } from 'next';
import { getJobBySlug } from '@/lib/dataStore';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const job = await getJobBySlug(params.slug);

  if (!job) {
    return {
      title: 'Job Not Found',
    };
  }

  // Create a clean description by removing newlines and truncating
  const cleanDescription = job.description.replace(/\n/g, ' ').slice(0, 155) + '...';

  return {
    title: `${job.title} in ${job.location} | Catalyst Hiring Solutions`,
    description: cleanDescription,
    alternates: {
      canonical: `https://www.catalysthiringsolutions.in/careers/${job.slug}`,
    },
    openGraph: {
      title: `${job.title} | Catalyst Hiring Solutions`,
      description: cleanDescription,
      url: `https://www.catalysthiringsolutions.in/careers/${job.slug}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${job.title} | Catalyst Hiring Solutions`,
      description: cleanDescription,
    },
  };
}

export default function JobLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
