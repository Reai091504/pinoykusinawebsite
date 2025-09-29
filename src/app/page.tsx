import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { categories, recipes } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { ChefHat, Heart, Clock, Users } from 'lucide-react';
import { RecipeCard } from '@/components/recipe-card';
import { IngredientSpotlight } from '@/components/ingredient-spotlight';

// Function to get a random recipe image from a category
function getRandomRecipeImage(categoryName: string) {
  const categoryRecipes = recipes.filter(
    recipe => recipe.category.toLowerCase() === categoryName.toLowerCase() && recipe.image
  );
  
  if (categoryRecipes.length === 0) return null;
  
  const randomRecipe = categoryRecipes[Math.floor(Math.random() * categoryRecipes.length)];
  const placeholderImage = PlaceHolderImages.find(p => p.id === randomRecipe.image);
  
  return placeholderImage;
}

type HomeProps = {
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default function Home({ searchParams }: HomeProps) {
  const rawSearch = searchParams?.search ?? '';
  const searchQuery = Array.isArray(rawSearch) ? rawSearch[0] ?? '' : rawSearch;
  const normalizedQuery = searchQuery.trim().toLowerCase();

  const searchResults = normalizedQuery
    ? recipes.filter((recipe) => {
        const searchableText = [
          recipe.name,
          recipe.description,
          recipe.category,
          ...recipe.ingredients.map((ingredient) => `${ingredient.quantity} ${ingredient.name}`),
        ]
          .join(' ')
          .toLowerCase();

        return searchableText.includes(normalizedQuery);
      })
    : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-yellow-100 via-orange-100 to-red-100 py-20 md:py-32">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.1'%3E%3Cpath d='M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm20 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-200 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-orange-200 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute bottom-20 left-32 w-12 h-12 bg-red-200 rounded-full opacity-35 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="flex justify-center items-center mb-6">
              <ChefHat className="w-16 h-16 text-amber-600 mr-4 animate-bounce" />
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse mx-2"></div>
              <Heart className="w-8 h-8 text-red-500 animate-pulse" />
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse mx-2"></div>
              <ChefHat className="w-16 h-16 text-amber-600 ml-4 animate-bounce" style={{animationDelay: '0.2s'}} />
            </div>
            <h1 className="font-serif text-6xl md:text-8xl font-bold bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent mb-8 leading-tight drop-shadow-lg">
              Pinoy Kusina
            </h1>
            <div className="w-32 h-2 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 mx-auto mb-8 rounded-full shadow-lg"></div>
            <p className="text-xl md:text-3xl text-gray-800 max-w-5xl mx-auto font-light leading-relaxed mb-6">
              Discover the rich flavors of the Philippines through time-honored recipes passed down through generations. 
            </p>
            <p className="text-lg md:text-xl text-orange-700 max-w-3xl mx-auto font-medium leading-relaxed">
              <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent font-bold">From Lola's kitchen to yours</span> — authentic Filipino cuisine made simple.
            </p>
            <div className="flex justify-center items-center mt-8 space-x-8 text-amber-700">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">Quick & Easy</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">Family Recipes</span>
              </div>
              <div className="flex items-center">
                <Heart className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">Made with Love</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="container mx-auto px-4 py-20">
        {searchQuery && (
          <div id="search-results" className="mb-16 scroll-mt-40">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
              Search results for “{searchQuery}”
            </h2>
            {searchResults.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {searchResults.map((recipe) => {
                  const image = PlaceHolderImages.find((placeholder) => placeholder.id === recipe.image);
                  return <RecipeCard key={recipe.id} recipe={recipe} image={image} />;
                })}
              </div>
            ) : (
              <p className="text-center text-lg text-muted-foreground">
                No recipes matched your search. Try a different keyword.
              </p>
            )}
          </div>
        )}

        <div className="text-center mb-20">
          <h2 className="font-serif text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Recipe Collections
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 mx-auto mb-8 rounded-full shadow-lg"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Explore our carefully curated collection of authentic Filipino dishes, organized by category for easy discovery.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const randomImage = getRandomRecipeImage(category.name);
            
            return (
              <Link 
                href={`/recipes/${category.name.toLowerCase().replace(/\s+/g, '-')}`} 
                key={category.name} 
                className="group"
              >
                <Card className="h-full overflow-hidden transform transition-all duration-500 ease-out group-hover:scale-110 group-hover:shadow-2xl hover:shadow-orange-200/50 border-2 border-orange-200 hover:border-red-300 bg-gradient-to-br from-white via-yellow-50 to-orange-50 cookbook-card hover:rotate-1" 
                     style={{animationDelay: `${index * 150}ms`}}>
                  <div className="relative h-64 w-full overflow-hidden">
                    {randomImage ? (
                      <>
                        <Image
                          src={randomImage.imageUrl}
                          alt={randomImage.description}
                          fill
                          className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      </>
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-200 via-orange-200 to-red-200 opacity-90"></div>
                        <category.icon className="absolute inset-0 w-full h-full text-white/80 p-6 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-700" />
                      </>
                    )}
                    <div className="absolute inset-0 flex items-end justify-center pb-6">
                      <div className="text-center">
                        <h3 className="font-serif text-3xl md:text-4xl font-bold text-white tracking-wide mb-3 drop-shadow-2xl">
                          {category.name}
                        </h3>
                        <div className="w-16 h-1 bg-gradient-to-r from-yellow-300 to-orange-300 mx-auto rounded-full shadow-lg"></div>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                      <div className="w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse"></div>
                    </div>
                    <div className="absolute top-4 left-4 w-6 h-6 bg-red-400/30 rounded-full animate-bounce"></div>
                    <div className="absolute bottom-4 left-4 w-4 h-4 bg-yellow-400/40 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  </div>
                  <CardHeader className="p-6 bg-gradient-to-br from-white via-yellow-50 to-orange-50">
                    <CardDescription className="text-center text-gray-700 text-lg leading-relaxed font-medium mb-4">
                      {category.description}
                    </CardDescription>
                    <div className="flex justify-center">
                      <div className="px-6 py-3 bg-gradient-to-r from-orange-400 to-red-400 text-white rounded-full text-sm font-bold group-hover:from-red-400 group-hover:to-pink-400 transition-all duration-300 shadow-lg group-hover:shadow-xl transform group-hover:-translate-y-1">
                        Explore Recipes →
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>

      <IngredientSpotlight />

      {/* Footer Section */}
      <div className="bg-gradient-to-br from-red-100 via-orange-100 to-yellow-100 py-20 mt-20 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-24 h-24 bg-yellow-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-red-200 rounded-full opacity-25 animate-bounce"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center items-center mb-8">
            <ChefHat className="w-12 h-12 text-red-600 mr-4 animate-bounce" />
            <h3 className="font-serif text-4xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Start Your Culinary Journey</h3>
            <ChefHat className="w-12 h-12 text-red-600 ml-4 animate-bounce" style={{animationDelay: '0.3s'}} />
          </div>
          <p className="text-gray-700 text-xl max-w-4xl mx-auto leading-relaxed mb-8">
            Each recipe tells a story of Filipino culture and tradition. Begin exploring and create memories 
            that will last a lifetime, one delicious dish at a time.
          </p>
          <div className="mt-10 flex justify-center space-x-3">
            {[...Array(7)].map((_, i) => (
              <div key={i} className={`w-3 h-3 rounded-full animate-pulse ${i % 3 === 0 ? 'bg-red-400' : i % 3 === 1 ? 'bg-orange-400' : 'bg-yellow-400'}`} style={{animationDelay: `${i * 300}ms`}}></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

