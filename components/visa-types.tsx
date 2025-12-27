import { PlaneLanding, Briefcase, Building2, Hospital, LucideIcon } from 'lucide-react';
import VisaCard from './visa-card';

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
          {visaTypes.map((visa, index) => (
            <VisaCard
              key={index}
              title={visa.title}
              description={visa.description}
              features={visa.features}
              duration={visa.duration}
              slug={visa.slug}
              iconColor={visa.iconColor}
              iconBgColor={visa.iconBgColor}
              IconComponent={visa.IconComponent}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

