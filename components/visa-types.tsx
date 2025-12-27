import React from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { PlaneLanding, Briefcase, Building2, Hospital, LucideIcon } from 'lucide-react';

export interface VisaType {
  title: string;
  description: string;
  features: string[];
  duration: string;
  slug: string;
  iconColor: string;
  iconBgColor: string;
  IconComponent: LucideIcon;
}

export const visaTypes: VisaType[] = [
  {
    title: 'Touristenvisum',
    description: 'Perfekt für Urlauber und Reisende, die Thailand erkunden möchten.',
    features: [
      'Gültig für 60 Tage',
      'Einmalige oder mehrfache Einreise',
      'Einfache Online-Beantragung',
      'Schnelle Bearbeitungszeit'
    ],
    duration: '60 Tage',
    slug: 'tourist-visa',
    iconColor: 'text-blue-600',
    iconBgColor: 'bg-blue-100',
    IconComponent: PlaneLanding
  },
  {
    title: 'Rentenvisum',
    description: 'Für Personen ab 50 Jahren, die ihren Ruhestand in Thailand verbringen möchten.',
    features: [
      'Für Personen ab 50 Jahren',
      'Jährliche Verlängerung möglich',
      'Finanzielle Nachweise erforderlich',
      'Langfristiger Aufenthalt'
    ],
    duration: '1 Jahr (verlängerbar)',
    slug: 'retirement',
    iconColor: 'text-orange-600',
    iconBgColor: 'bg-orange-100',
    IconComponent: Building2
  },
  {
    title: 'Geschäfts-/Investorenvisum',
    description: 'Für Geschäftsleute und Investoren, die in Thailand arbeiten oder investieren möchten.',
    features: [
      'Geschäftstätigkeit erlaubt',
      'Investitionsmöglichkeiten',
      'Arbeitserlaubnis möglich',
      'Langfristiger Aufenthalt'
    ],
    duration: '1 Jahr (verlängerbar)',
    slug: 'business-investor-visa',
    iconColor: 'text-green-600',
    iconBgColor: 'bg-green-100',
    IconComponent: Briefcase
  },
  {
    title: 'Medizinisches Behandlungsvisum',
    description: 'Für Personen, die medizinische Behandlungen in Thailand benötigen.',
    features: [
      'Medizinische Behandlung erlaubt',
      'Begleitperson möglich',
      'Flexible Aufenthaltsdauer',
      'Zugang zu thailändischen Krankenhäusern'
    ],
    duration: 'Variabel',
    slug: 'medical-treatment',
    iconColor: 'text-red-600',
    iconBgColor: 'bg-red-100',
    IconComponent: Hospital
  }
];

export default function VisaTypes() {
  return (
    <section id="visa-types" className="py-20 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Visumtypen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wählen Sie das richtige Visum für Ihre Reise nach Thailand. 
            Wir helfen Ihnen bei der Auswahl und Beantragung.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {visaTypes.map((visa, index) => {
            const Icon = visa.IconComponent;
            return (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                <div className={`${visa.iconBgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${visa.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {visa.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {visa.description}
                </p>
                
                <div className="mb-4 flex-1">
                  <div className="text-sm font-semibold text-gray-700 mb-2">
                    Aufenthaltsdauer: {visa.duration}
                  </div>
                  <ul className="space-y-2">
                    {visa.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <span className="text-blue-600 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href={`/visa/${visa.slug}`}>
                  <Button 
                    variant="outline" 
                    className="w-full mt-auto"
                  >
                    Mehr erfahren
                  </Button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

