import { Metadata } from "next";
import { getAllPosts } from "@/lib/post-data";
import PostCard from "@/components/post-card";

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
            Aktuelle Informationen über Thailand, Visa-Nachrichten und relevante
            Updates für deutsche Reisende.
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
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Nachrichten & Artikel - Visum Thailand",
  description:
    "Aktuelle Nachrichten und Artikel über Thailand, Visa-Informationen und Reisetipps für deutsche Staatsbürger.",
};
