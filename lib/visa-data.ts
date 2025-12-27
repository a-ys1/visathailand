import fs from 'fs';
import path from 'path';
import { VisaData } from '@/types/visa';

export async function getVisaData(slug: string): Promise<VisaData | null> {
  try {
    const filePath = path.join(process.cwd(), 'data', 'visas', `${slug}.json`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error(error);
    return null;
  }
}

