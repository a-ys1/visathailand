import Link from 'next/link';
import { Metadata } from 'next';
import { getAllPosts } from '@/lib/post-data';
import { Calendar, User } from 'lucide-react';

export default async function PostsArchive() {
  const posts = await getAllPosts();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-thai-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Nachrichten & Artikel
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Aktuelle Informationen über Thailand, Visa-Nachrichten und relevante Updates für deutsche Reisende.
          </p>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">Keine Artikel gefunden.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => {
              const postDate = new Date(post.date);
              const formattedDate = postDate.toLocaleDateString('de-DE', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              });

              return (
                <Link
                  key={post.slug}
                  href={`/posts/${post.slug}`}
                  className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col group"
                >
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 flex-1 text-sm leading-relaxed">
                    {post.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{formattedDate}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export const metadata: Metadata = {
    title: "Nachrichten & Artikel - Visum Thailand",
    description: "Aktuelle Nachrichten und Artikel über Thailand, Visa-Informationen und Reisetipps für deutsche Staatsbürger.",
  };
  
