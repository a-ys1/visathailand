import Link from 'next/link';
import { getAllPosts } from '@/lib/post-data';
import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Label } from './ui/label';

export default async function PostsSection() {
  const posts = await getAllPosts();
  const recentPosts = posts.slice(0, 3);

  if (recentPosts.length === 0) {
    return null;
  }

  return (
    <section id="posts-section" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Aktuelle Nachrichten
            </h2>
            <p className="text-xl text-gray-600">
              Bleiben Sie auf dem Laufenden mit den neuesten Informationen über Thailand und Visa-Updates.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {recentPosts.map((post) => {
            const postDate = new Date(post.date);
            const formattedDate = postDate.toLocaleDateString('de-DE', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            });

            return (
              <Link
                key={post.slug}
                href={`/posts/${post.slug}`}
                className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group cursor-pointer"
              >
                <div className="mb-3">
                  <Label>{post.category}</Label>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 flex-1 text-sm leading-relaxed line-clamp-3">
                  {post.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{formattedDate}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center">
          <Link href="/posts">
            <Button variant="outline" size="lg">
              Alle Artikel anzeigen <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

