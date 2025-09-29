"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Recipe } from '@/lib/types';
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { Clock } from 'lucide-react';

type RecipeCardProps = {
  recipe: Recipe;
  image?: ImagePlaceholder;
};

export function RecipeCard({ recipe, image }: RecipeCardProps) {
  // Check if recipe.image is a local path (starts with /) or a placeholder ID
  const isLocalImage = recipe.image && recipe.image.startsWith('/');
  const shouldShowImage = isLocalImage || image;
  
  return (
    <Link href={`/recipes/${recipe.category.toLowerCase()}/${recipe.slug}`} className="group block">
      <Card className="h-full overflow-hidden transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:border-primary/50">
        {shouldShowImage && (
          <div className="overflow-hidden aspect-video">
            <Image
              src={isLocalImage ? recipe.image! : image!.imageUrl}
              alt={isLocalImage ? `${recipe.name} - Filipino Recipe` : image!.description}
              data-ai-hint={isLocalImage ? recipe.name.toLowerCase() : image!.imageHint}
              width={600}
              height={400}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
        <CardHeader>
          <CardTitle className="font-headline text-2xl group-hover:text-black transition-colors">{recipe.name}</CardTitle>
          <CardDescription className="line-clamp-2">{recipe.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="w-4 h-4 mr-2" />
            <span>{recipe.prepTime} Prep | {recipe.cookTime} Cook</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
