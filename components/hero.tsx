import { Button } from './ui/button';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero.webp" 
          alt="Thailand Landschaft" 
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 text-white">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Visum Thailand
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              Alle Informationen, die Sie benötigen, um Ihr Visum für{' '}
              Thailand zu erhalten.
              Ihre Reise beginnt hier mit unserem umfassenden Leitfaden und Expertenunterstützung.
            </p>
            <div className="pt-4">
                <a href="#visa-types" className="scroll-smooth">
                  <Button size="lg" className="bg-thai-blue text-white">
                    Loslegen
                  </Button>
                </a>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}