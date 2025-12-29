import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import { Label } from './ui/label';
import { PostData } from '@/types/post';

interface Props {
  post: PostData;
}

export default function PostCard({ post }: Props) {
  const postDate = new Date(post.date);
  const formattedDate = postDate.toLocaleDateString('de-DE', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <Link
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
  )
}
