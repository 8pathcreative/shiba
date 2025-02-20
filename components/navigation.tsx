'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Dog } from 'lucide-react';

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Dog className="h-6 w-6 text-orange-500" />
            <span className="text-xl font-bold text-orange-900">Shiba Inu</span>
          </Link>
          <div className="flex items-center space-x-6">
            <Link
              href="/breeders"
              className={cn(
                'text-sm font-medium transition-colors hover:text-orange-900',
                pathname === '/breeders'
                  ? 'text-orange-900'
                  : 'text-gray-600'
              )}
            >
              Breeders
            </Link>
            <Link
              href="/rescues"
              className={cn(
                'text-sm font-medium transition-colors hover:text-orange-900',
                pathname === '/rescues'
                  ? 'text-orange-900'
                  : 'text-gray-600'
              )}
            >
              Rescues
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}