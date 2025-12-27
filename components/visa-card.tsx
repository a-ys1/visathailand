import React from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { LucideIcon } from 'lucide-react';

interface Props {
  title: string;
  description: string;
  features: string[];
  duration: string;
  slug: string;
  iconColor: string;
  iconBgColor: string;
  IconComponent: LucideIcon;
}

export default function VisaCard({
  title,
  description,
  features,
  duration,
  slug,
  iconColor,
  iconBgColor,
  IconComponent: Icon,
}: Props) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col relative cursor-pointer group">
      <Link 
        href={`/visa/${slug}`}
        className="absolute inset-0 z-10 cursor-pointer"
        aria-label={`Mehr über ${title} erfahren`}
      />
      <div className="flex items-center justify-between gap-3 mb-2">
        <h3 className="text-xl font-bold text-gray-900 flex-1 transition-colors">
          {title}
        </h3>
        <div className={`${iconBgColor} w-8 h-8 rounded-lg flex items-center justify-center shrink-0`}>
          <Icon className={`w-5 h-5 ${iconColor}`} />
        </div>
      </div>
      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
        {description}
      </p>
      
      <div className="mb-4 flex-1">
        <div className="text-sm font-semibold text-gray-700 mb-2">
          Aufenthaltsdauer: {duration}
        </div>
        <ul className="space-y-2">
          {features.map((feature, idx) => (
            <li key={idx} className="text-sm text-gray-600 flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto">
        <Button variant="outline" className="w-full">
          Mehr erfahren
        </Button>
      </div>
    </div>
  );
}

