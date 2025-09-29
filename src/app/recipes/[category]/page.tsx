import { notFound } from 'next/navigation';
import { recipes, categories } from '@/lib/data';
import type { Category as CategoryType } from '@/lib/types';
import { RecipeCard } from '@/components/recipe-card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function generateStaticParams() {
  return categories.map((category) => ({
    category: category.name.toLowerCase().replace(/\s+/g, '-'),
  }));
}

export async function generateMetadata({ params }: { params: { category: string } }) {
  const categoryName = params.category.charAt(0).toUpperCase() + params.category.slice(1);
  return {
    title: `${categoryName} Recipes - Pinoy Kusina`,
  };
}


const getCategory = (name: string): CategoryType | undefined => {
  // Convert URL parameter back to category name format
  const categoryName = name.replace(/-/g, ' ');
  return categories.find((cat) => cat.name.toLowerCase() === categoryName.toLowerCase());
};

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = getCategory(params.category);

  if (!category) {
    notFound();
  }

  const categoryRecipes = recipes.filter(
    (recipe) => recipe.category.toLowerCase() === category.name.toLowerCase()
  );

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <header className="text-center mb-12 border-b pb-8">
        <div className="flex justify-center items-center gap-4">
          <category.icon className="w-16 h-16 text-black" />
          <h1 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tight text-black">
            {category.name} Recipes
          </h1>
        </div>
        <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">{category.description}</p>
      </header>

      {categoryRecipes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryRecipes.map((recipe) => {
            const image = PlaceHolderImages.find(p => p.id === recipe.image);
            return (
              <RecipeCard key={recipe.id} recipe={recipe} image={image} />
            );
          })}
        </div>
      ) : (
        <p className="text-center text-muted-foreground text-lg">
          No recipes found in this category yet. Please check back later!
        </p>
      )}
    </div>
  );
}
