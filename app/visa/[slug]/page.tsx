import { notFound } from 'next/navigation';
import Link from 'next/link';
import FAQ from '@/components/faq';
import { ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import { getVisaData } from '@/lib/visa-data';

export async function generateStaticParams() {
  const visasDir = path.join(process.cwd(), 'data', 'visas');
  const files = fs.readdirSync(visasDir);
  return files
    .filter(file => file.endsWith('.json'))
    .map(file => ({
      slug: file.replace('.json', ''),
    }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const visaData = await getVisaData(slug);
  
  if (!visaData) {
    return {
      title: 'Visum nicht gefunden',
    };
  }

  return {
    title: `${visaData.title} - Visum Thailand`,
    description: visaData.description,
  };
}

export default async function VisaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const visaData = await getVisaData(slug);

  if (!visaData) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-thai-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/" 
            className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zur Startseite
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {visaData.title}
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            {visaData.description}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Duration */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-sm font-semibold text-gray-700 mb-1">
                Aufenthaltsdauer
              </h2>
              <p className="text-2xl font-bold text-gray-900">
                {visaData.duration}
              </p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Hauptmerkmale
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {visaData.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start p-4 bg-gray-50 rounded-lg"
              >
                <span className="text-blue-600 mr-3 mt-0.5">✓</span>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className="mb-12 space-y-8">
          {visaData.content.sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                {section.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <FAQ 
        faqs={visaData.faqs}
        title="Häufig gestellte Fragen"
        description="Antworten auf die häufigsten Fragen zu diesem Visumtyp"
      />
    </div>
  );
}

