import FAQ from '@/components/faq';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Häufig gestellte Fragen - Visum Thailand",
  description: "Antworten auf die häufigsten Fragen zu Thailand-Visa für deutsche Staatsbürger. Dokumente, Bearbeitungszeiten, Kosten und mehr.",
};

const faqs = [
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
  },
  {
    question: "Muss ich eine Krankenversicherung für Thailand haben?",
    answer: "Für bestimmte Visumtypen wie das Rentenvisum ist eine Krankenversicherung erforderlich. Für Touristenvisa ist sie nicht zwingend erforderlich, wird aber dringend empfohlen. Eine Reisekrankenversicherung schützt Sie vor hohen medizinischen Kosten im Ausland."
  },
  {
    question: "Kann ich mit einem Touristenvisum arbeiten?",
    answer: "Nein, ein Touristenvisum erlaubt keine bezahlte Arbeit in Thailand. Für Arbeitszwecke benötigen Sie ein Arbeitsvisum oder ein Geschäftsvisum mit entsprechender Arbeitserlaubnis."
  },
  {
    question: "Wie lange vor meiner Reise sollte ich das Visum beantragen?",
    answer: "Es wird empfohlen, den Visumantrag mindestens 2-4 Wochen vor der geplanten Reise einzureichen. Dies gibt ausreichend Zeit für die Bearbeitung und eventuelle Nachfragen oder zusätzliche Dokumente."
  },
  {
    question: "Was passiert, wenn mein Visumantrag abgelehnt wird?",
    answer: "Wenn Ihr Visumantrag abgelehnt wird, erhalten Sie normalerweise eine Begründung. Sie können den Antrag erneut stellen, nachdem Sie die fehlenden Dokumente oder Informationen bereitgestellt haben. Die Visumgebühr wird in der Regel nicht zurückerstattet."
  }
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-thai-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Häufig gestellte Fragen
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Antworten auf die häufigsten Fragen zu Thailand-Visa für deutsche Staatsbürger.
          </p>
        </div>
      </div>

      {/* FAQ Content */}
      <FAQ 
        faqs={faqs}
        title=""
        description=""
      />
    </div>
  );
}

