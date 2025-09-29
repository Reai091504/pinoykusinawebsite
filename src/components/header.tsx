"use client";

import { FormEvent, useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { Facebook, Instagram, Youtube, Search } from 'lucide-react';
import { Input } from './ui/input';
import { useRouter, useSearchParams } from 'next/navigation';

export function Header() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setSearchTerm(searchParams.get('search') ?? '');
  }, [searchParams]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = searchTerm.trim();

    if (!query) {
      router.push('/');
      return;
    }

    router.push(`/?search=${encodeURIComponent(query)}#search-results`);
  };

  return (
    <header className="bg-white border-b sticky top-0 z-40 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="h-20 flex items-center justify-between">
          <Link href="/" className="text-3xl font-black font-headline tracking-tighter text-gray-900 hover:text-primary transition-colors">
            Pinoy Kusina
          </Link>
          
          <div className="hidden lg:flex items-center gap-2">
            <nav className="flex items-center gap-4 text-sm font-bold uppercase tracking-wider">
              <Link href="/recipes/pork" className="text-gray-600 hover:text-primary">Pork</Link>
              <Link href="/recipes/chicken" className="text-gray-600 hover:text-primary">Chicken</Link>
              <Link href="/recipes/beef" className="text-gray-600 hover:text-primary">Beef</Link>
              <Link href="/recipes/seafood" className="text-gray-600 hover:text-primary">Seafood</Link>
              <Link href="/recipes/vegan" className="text-gray-600 hover:text-primary">Vegan</Link>
              <Link href="/meal-planner" className="text-gray-600 hover:text-primary">Meal Planner</Link>
            </nav>
          </div>

          <div className="flex items-center gap-3">
             <form onSubmit={handleSubmit} className="hidden md:flex items-center gap-2" role="search">
                <Input
                  type="search"
                  placeholder="Search recipes..."
                  className="h-9"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  aria-label="Search recipes"
                />
                <Button variant="ghost" size="icon" type="submit" aria-label="Submit search">
                    <Search className="h-5 w-5 text-gray-600"/>
                </Button>
            </form>
            <Button variant="ghost" size="icon">
              <Facebook className="h-5 w-5 text-gray-600" />
            </Button>
            <Button variant="ghost" size="icon">
              <Instagram className="h-5 w-5 text-gray-600" />
            </Button>
            <Button variant="ghost" size="icon">
              <Youtube className="h-5 w-5 text-gray-600" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
