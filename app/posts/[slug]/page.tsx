import { Label } from "@/components/ui/label";
import { getPostData } from "@/lib/post-data";
import fs from "fs";
import { ArrowLeft, Calendar, ExternalLink, User } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import path from "path";

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), "data", "posts");
  const files = fs.readdirSync(postsDir);
  return files
    .filter((file) => file.endsWith(".json"))
    .map((file) => ({
      slug: file.replace(".json", ""),
    }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const postData = await getPostData(slug);

  if (!postData) {
    notFound();
  }

  const postDate = new Date(postData.date);
  const formattedDate = postDate.toLocaleDateString("de-DE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-thai-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/posts"
            className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zu den Artikeln
          </Link>
          <div className="mb-4">
            <Label variant="secondary">{postData.category}</Label>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {postData.title}
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mb-4">
            {postData.description}
          </p>
          <div className="flex items-center gap-6 text-blue-100 text-sm">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{postData.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{formattedDate}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Content Sections */}
        <div className="mb-12 space-y-8">
          {postData.content.sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                {section.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>

        {/* Sources */}
        {postData.sources && postData.sources.length > 0 && (
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Quellen
            </h3>
            <ul className="space-y-2">
              {postData.sources.map((source, index) => (
                <li key={index}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>{source.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const postData = await getPostData(slug);

  if (!postData) {
    return {
      title: "Artikel nicht gefunden",
    };
  }

  return {
    title: `${postData.title} - Visum Thailand`,
    description: postData.description,
  };
}
