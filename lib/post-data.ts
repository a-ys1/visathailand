import fs from 'fs';
import path from 'path';
import { PostData } from '@/types/post';

export async function getPostData(slug: string): Promise<PostData | null> {
  try {
    const filePath = path.join(process.cwd(), 'data', 'posts', `${slug}.json`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getAllPosts(): Promise<PostData[]> {
  try {
    const postsDir = path.join(process.cwd(), 'data', 'posts');
    const files = fs.readdirSync(postsDir);
    const posts = files
      .filter(file => file.endsWith('.json'))
      .map(file => {
        const filePath = path.join(postsDir, file);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(fileContents);
      });
    
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error(error);
    return [];
  }
}

