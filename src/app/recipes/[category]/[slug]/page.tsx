import { notFound } from 'next/navigation';
import Image from 'next/image';
import { recipes } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Clock, Users, Soup } from 'lucide-react';
import IngredientSubstitution from '@/components/ingredient-substitution';
import PrintButton from '@/components/print-button';

export function generateStaticParams() {
  return recipes.map((recipe) => ({
    category: recipe.category.toLowerCase(),
    slug: recipe.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const recipe = recipes.find((r) => r.slug === params.slug);
  if (!recipe) {
    return { title: 'Recipe Not Found' };
  }
  return {
    title: `${recipe.name} - Pinoy Kusina`,
    description: recipe.description,
  };
}

export default function RecipePage({ params }: { params: { category: string; slug: string } }) {
  const recipe = recipes.find(
    (r) => r.category.toLowerCase() === params.category && r.slug === params.slug
  );

  if (!recipe) {
    notFound();
  }

  const image = PlaceHolderImages.find((p) => p.id === recipe.image);
  const recipeIngredientsString = recipe.ingredients.map(i => `${i.quantity} ${i.name}`).join(', ');
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <article className="max-w-4xl mx-auto">
        <header className="mb-8">
          <Badge variant="secondary" className="mb-2">{recipe.category}</Badge>
          <h1 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tight text-black mb-4">
            {recipe.name}
          </h1>
          <p className="text-lg text-muted-foreground">{recipe.description}</p>
        </header>

        {image && (
          <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={image.imageUrl}
              alt={image.description}
              data-ai-hint={image.imageHint}
              width={1200}
              height={675}
              className="object-cover w-full"
              priority
            />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8">
                <Card className="printable-content">
                    <CardContent className="p-6">
                        <div className="flex flex-wrap justify-around gap-4 mb-6 text-center">
                            <div className="flex flex-col items-center">
                                <Clock className="w-6 h-6 mb-1 text-foreground" />
                                <span className="font-bold">Prep Time</span>
                                <span className="text-muted-foreground">{recipe.prepTime}</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <Soup className="w-6 h-6 mb-1 text-foreground" />
                                <span className="font-bold">Cook Time</span>
                                <span className="text-muted-foreground">{recipe.cookTime}</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <Users className="w-6 h-6 mb-1 text-foreground" />
                                <span className="font-bold">Servings</span>
                                <span className="text-muted-foreground">{recipe.servings}</span>
                            </div>
                        </div>
                        <Separator className="my-6" />
                        
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold font-headline mb-4">Ingredients</h2>
                            <ul className="list-disc list-inside space-y-2">
                                {recipe.ingredients.map((ingredient, index) => (
                                <li key={index}>
                                    <span className="font-semibold">{ingredient.quantity}</span> {ingredient.name}
                                </li>
                                ))}
                            </ul>
                        </section>

                        <Separator className="my-6" />

                        <section className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold font-headline mb-4">Instructions</h2>
                                <ol className="list-decimal list-inside space-y-4">
                                    {recipe.instructions.map((step, index) => (
                                    <li key={index} className="pl-2">
                                        {step}
                                    </li>
                                    ))}
                                </ol>
                            </div>
                        </section>
                    </CardContent>
                </Card>
            </div>
            <aside className="md:col-span-4 space-y-6">
                <PrintButton />
                <IngredientSubstitution 
                    recipeName={recipe.name} 
                    ingredients={recipe.ingredients}
                    recipeIngredientsString={recipeIngredientsString}
                />
            </aside>
        </div>
      </article>
    </div>
  );
}
