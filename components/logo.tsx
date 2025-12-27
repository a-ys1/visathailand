import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image
        src="/logo-icon.svg"
        alt="Thailand Flag"
        width={40}
        height={40}
        className="shrink-0"
        priority
      />
      <span className="text-xl font-bold text-gray-900">visathailand</span>
    </Link>
  );
}

