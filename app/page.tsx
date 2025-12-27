import Hero from "@/components/hero";
import VisaTypes from "@/components/visa-types";
import FAQ from "@/components/faq";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thailand Visum für Deutsche | Visum Thailand",
  description: "Alles über Thailand Visa für deutsche Staatsbürger. Touristenvisum, Rentenvisum, Geschäftsvisum & mehr. Einfache Beantragung & Expertenhilfe.",
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    languages: {
      'de': 'https://visathailand.de',
      'de-DE': 'https://visathailand.de',
    },
  },
  openGraph: {
    title: "Thailand Visum für Deutsche | Visum Thailand",
    description: "Alles über Thailand Visa für deutsche Staatsbürger. Touristenvisum, Rentenvisum, Geschäftsvisum & mehr. Einfache Beantragung & Expertenhilfe.",
    url: "https://visathailand.de",
    type: "website",
    locale: "de_DE",
    siteName: "Visum Thailand",
  },
  keywords: ["Thailand Visum", "Thailand Visa Deutschland", "Thailand Visum für Deutsche", "Touristenvisum Thailand", "Rentenvisum Thailand", "Geschäftsvisum Thailand"],
};

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50">
      <main className="flex min-h-screen w-full flex-col">
        <Hero />
        <VisaTypes />
        <FAQ
          faqs={[
            {
              question: "Welche Dokumente benötige ich für ein Thailand-Visum?",
              answer: "Die erforderlichen Dokumente variieren je nach Visumtyp. In der Regel benötigen Sie einen gültigen Reisepass (mindestens 6 Monate Gültigkeit), ein Passfoto, den ausgefüllten Antrag und die Zahlung der Visumgebühr. Für bestimmte Visumtypen können zusätzliche Dokumente wie Finanznachweise, Einladungsschreiben oder medizinische Bescheinigungen erforderlich sein."
            },
            {
              question: "Wie lange dauert die Bearbeitung eines Visums?",
              answer: "Die Bearbeitungszeit variiert je nach Visumtyp. Ein Touristenvisum wird in der Regel innerhalb von 3-5 Werktagen bearbeitet, während Geschäfts- oder Rentenvisa 5-15 Werktage in Anspruch nehmen können. Es wird empfohlen, den Antrag mindestens 2-4 Wochen vor der geplanten Reise einzureichen."
            },
            {
              question: "Kann ich mein Visum verlängern?",
              answer: "Ja, viele Visa können verlängert werden. Touristenvisa können einmalig um 30 Tage verlängert werden. Renten- und Geschäftsvisa können jährlich verlängert werden, solange Sie die Voraussetzungen erfüllen. Die Verlängerung muss bei einem thailändischen Einwanderungsbüro beantragt werden."
            },
            {
              question: "Was kostet ein Thailand-Visum?",
              answer: "Die Kosten variieren je nach Visumtyp. Ein Touristenvisum kostet 40 USD für eine einmalige Einreise oder 200 USD für eine mehrfache Einreise. Rentenvisa kosten etwa 200 USD, während Geschäftsvisa je nach Kategorie zwischen 200-500 USD kosten können."
            },
            {
              question: "Kann ich ohne Visum nach Thailand reisen?",
              answer: "Bürger vieler Länder können für bis zu 30 Tage visumfrei nach Thailand einreisen (Visa-on-Arrival). Dies gilt jedoch nur für touristische Zwecke. Für längere Aufenthalte oder andere Zwecke benötigen Sie ein entsprechendes Visum."
            },
            {
              question: "Was ist der Unterschied zwischen einem E-Visum und einem Visa-on-Arrival?",
              answer: "Ein E-Visum wird vor der Reise online beantragt und genehmigt, während ein Visa-on-Arrival direkt bei der Einreise am Flughafen oder Grenzübergang ausgestellt wird. E-Visa bieten mehr Sicherheit und können für längere Aufenthalte verwendet werden."
            }
          ]}
          title="Häufig gestellte Fragen"
          description="Antworten auf die häufigsten Fragen zu Thailand-Visa"
        />
      </main>
    </div>
  );
}
