export interface VisaData {
    slug: string;
    title: string;
    description: string;
    duration: string;
    features: string[];
    content: {
      sections: Array<{
        title: string;
        content: string;
      }>;
    };
    faqs: Array<{
      question: string;
      answer: string;
    }>;
    officialLink: string;
  }