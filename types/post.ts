export interface PostData {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  content: {
    sections: Array<{
      title: string;
      content: string;
    }>;
  };
  sources?: Array<{
    name: string;
    url: string;
  }>;
}

