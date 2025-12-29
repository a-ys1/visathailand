import Link from 'next/link';
import { getAllPosts } from '@/lib/post-data';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import PostCard from './post-card';

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
          {recentPosts.map((post) => (
             <PostCard key={post.slug} post={post} />
          ))}
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

