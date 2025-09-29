'use client';

import { useMemo } from 'react';
import clsx from 'clsx';
import { recipes } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Sparkles, Droplet, Fish, Leaf, Star, UtensilsCrossed, Flame } from 'lucide-react';

type IconComponent = React.ComponentType<{ className?: string }>;

type IngredientMeta = {
  icon: IconComponent;
  badge: string;
  accent: string;
  quickFact: string;
  storageTip: string;
};

const accentPalette = [
  'from-amber-200 via-orange-100 to-yellow-100',
  'from-rose-200 via-amber-100 to-red-100',
  'from-teal-200 via-emerald-100 to-lime-100',
  'from-yellow-200 via-rose-100 to-orange-100',
  'from-lime-200 via-yellow-100 to-emerald-100',
  'from-orange-200 via-red-100 to-rose-100',
];

const ingredientMeta: Record<string, IngredientMeta> = {
  calamansi: {
    icon: Sparkles,
    badge: 'Citrus Brightener',
    accent: 'from-lime-200 via-lime-100 to-yellow-100',
    quickFact: 'Squeeze calamansi just before serving to add a fresh pop of brightness to grilled meats and pancit.',
    storageTip: 'Keep at room temperature for a couple of days or refrigerate unwashed fruits in a breathable bag.',
  },
  bagoong: {
    icon: Fish,
    badge: 'Umami Powerhouse',
    accent: 'from-rose-200 via-amber-100 to-orange-100',
    quickFact: 'A spoonful of bagoong deepens sauces like kare-kare and makes green mangoes irresistible.',
    storageTip: 'Store tightly sealed in the fridge and stir periodically to keep the paste evenly mixed.',
  },
  'sukang iloko': {
    icon: Droplet,
    badge: 'Vinegar Heritage',
    accent: 'from-amber-200 via-orange-100 to-yellow-100',
    quickFact: 'Naturally fermented cane vinegar with a mellow tang, perfect for dipping sauces and adobo marinades.',
    storageTip: 'Keep bottles in a cool, dark cabinet and close the cap firmly after each use to protect its aroma.',
  },
  'gata (coconut milk)': {
    icon: Leaf,
    badge: 'Tropical Silk',
    accent: 'from-teal-200 via-emerald-100 to-lime-100',
    quickFact: 'Simmer gently to avoid curdling—gata delivers velvety richness in classics like laing and ginataan.',
    storageTip: 'Refrigerate opened cans in a sealed container and use within 3 days, or freeze in portions.',
  },
  patis: {
    icon: Droplet,
    badge: 'Liquid Umami',
    accent: 'from-amber-200 via-yellow-100 to-rose-100',
    quickFact: 'A dash of patis at the end of cooking wakes up soups and sautés without overpowering them.',
    storageTip: 'Store at room temperature away from direct sunlight; its flavor intensifies over time.',
  },
  langka: {
    icon: Leaf,
    badge: 'Sweet Tropical Fruit',
    accent: 'from-yellow-200 via-orange-100 to-lime-100',
    quickFact: 'Ripe langka is used to sweeten halo-halo and turon with its honeyed aroma.',
    storageTip: 'Refrigerate unused flesh in an airtight container and consume within 2-3 days.',
  },
  malunggay: {
    icon: Leaf,
    badge: 'Nutrient Booster',
    accent: 'from-emerald-200 via-lime-100 to-teal-100',
    quickFact: 'Malunggay leaves add a vitamin-rich boost to tinola, munggo, and breakfast omelettes.',
    storageTip: 'Wrap leaves in a damp towel, place in a perforated bag, and refrigerate for up to a week.',
  },
  saluyot: {
    icon: Leaf,
    badge: 'Leafy Superfood',
    accent: 'from-teal-200 via-emerald-100 to-green-100',
    quickFact: 'Saluyot gives a silky texture to dinengdeng and other Ilocano vegetable stews.',
    storageTip: 'Keep unwashed leaves refrigerated in a breathable bag and cook within 3 days for best texture.',
  },
  'banana blossom': {
    icon: Leaf,
    badge: 'Hearty Fiber',
    accent: 'from-rose-200 via-yellow-100 to-orange-100',
    quickFact: 'Banana blossoms soak up the peanut sauce in kare-kare and add bite to vegetarian dishes.',
    storageTip: 'Submerge cleaned blossoms in acidulated water and refrigerate to keep them from darkening.',
  },
  'annatto seeds': {
    icon: Flame,
    badge: 'Color & Aroma',
    accent: 'from-orange-200 via-red-100 to-amber-100',
    quickFact: 'To extract annatto’s color, steep the seeds in warm oil before sautéing aromatics.',
    storageTip: 'Keep in an airtight jar away from light to preserve their pigment and nutty aroma.',
  },
};

type IngredientAggregate = {
  key: string;
  name: string;
  recipes: string[];
};

function shuffleArray<T>(input: T[]): T[] {
  const array = [...input];
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function formatRecipeList(recipeNames: string[]) {
  if (recipeNames.length === 0) return '';
  if (recipeNames.length === 1) return recipeNames[0];
  if (recipeNames.length === 2) return `${recipeNames[0]} and ${recipeNames[1]}`;
  return `${recipeNames[0]}, ${recipeNames[1]}, and ${recipeNames[2]}`;
}

export function IngredientSpotlight() {
  const spotlightItems = useMemo<IngredientAggregate[]>(() => {
    const ingredientMap = new Map<string, { name: string; recipes: Set<string> }>();

    recipes.forEach((recipe) => {
      recipe.ingredients.forEach((ingredient) => {
        const normalizedName = ingredient.name.trim().toLowerCase();
        if (!normalizedName) return;

        if (!ingredientMap.has(normalizedName)) {
          ingredientMap.set(normalizedName, {
            name: ingredient.name.trim(),
            recipes: new Set<string>(),
          });
        }

        ingredientMap.get(normalizedName)!.recipes.add(recipe.name);
      });
    });

    const aggregated = Array.from(ingredientMap.entries())
      .map(([key, value]) => ({
        key,
        name: value.name,
        recipes: Array.from(value.recipes).slice(0, 3),
      }))
      .filter((ingredient) => ingredient.recipes.length > 0);

    const shuffled = shuffleArray(aggregated);
    return shuffled.slice(0, Math.min(8, shuffled.length));
  }, []);

  if (spotlightItems.length === 0) {
    return null;
  }

  return (
    <section
      className="relative py-24 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50"
      id="ingredient-spotlight"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-12 left-16 w-20 h-20 rounded-full bg-orange-200/40 blur-xl animate-pulse" />
        <div className="absolute bottom-10 right-20 w-24 h-24 rounded-full bg-red-200/40 blur-3xl animate-bounce" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-yellow-200/30 blur-3xl" />
      </div>
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/80 border border-orange-200 shadow-sm backdrop-blur-sm">
            <Sparkles className="h-5 w-5 text-orange-500 animate-pulse" />
            <span className="text-sm font-semibold tracking-wide uppercase text-orange-600">Ingredient Spotlight</span>
          </div>
          <h2 className="mt-6 font-serif text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
            Pang-Kusina Staples
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed">
            Swipe through beloved Filipino pantry essentials and see which dishes bring them to life.
          </p>
        </div>

        <div className="relative">
          <Carousel
            opts={{ align: 'start', loop: spotlightItems.length > 3 }}
            className="pb-8"
          >
            <CarouselContent className="-ml-2">
              {spotlightItems.map((item, index) => {
                const meta = ingredientMeta[item.key];
                const Icon = meta?.icon ?? UtensilsCrossed;
                const accent = meta?.accent ?? accentPalette[index % accentPalette.length];
                const badge = meta?.badge ?? 'Pantry Essential';
                const quickFact = meta?.quickFact ?? `Featured in Filipino favorites like ${formatRecipeList(item.recipes)}.`;
                const storageTip = meta?.storageTip ?? 'Store in a cool, dry place inside an airtight container to keep flavors vibrant.';

                return (
                  <CarouselItem key={item.key} className="md:basis-1/2 xl:basis-1/3 pl-3">
                    <Card className="relative h-full overflow-hidden border-2 border-orange-200/60 shadow-lg bg-white/90 backdrop-blur-sm">
                      <div
                        className={clsx(
                          'absolute inset-0 opacity-80 pointer-events-none bg-gradient-to-br',
                          accent,
                        )}
                      />
                      <div className="absolute -top-12 -right-10 w-36 h-36 rounded-full bg-white/30 blur-2xl" />
                      <CardHeader className="relative z-10">
                        <div className="flex items-center gap-3">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/70 shadow-inner border border-orange-200">
                            <Icon className="h-6 w-6 text-orange-500" />
                          </div>
                          <div>
                            <CardTitle className="font-serif text-3xl text-gray-900">
                              {item.name}
                            </CardTitle>
                            <CardDescription className="text-orange-700 font-medium">
                              {badge}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="relative z-10 space-y-4">
                        <div>
                          <h3 className="text-sm font-semibold uppercase tracking-wide text-red-500 flex items-center gap-2">
                            <Star className="h-4 w-4" /> Quick Fact
                          </h3>
                          <p className="mt-2 text-sm md:text-base text-gray-800 leading-relaxed">
                            {quickFact}
                          </p>
                        </div>
                        <div className="rounded-2xl bg-white/85 border border-orange-200/50 p-4 shadow-inner">
                          <h3 className="text-sm font-semibold uppercase tracking-wide text-orange-500 flex items-center gap-2">
                            <Leaf className="h-4 w-4" /> Storage Tip
                          </h3>
                          <p className="mt-2 text-sm md:text-base text-gray-800 leading-relaxed">
                            {storageTip}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold uppercase tracking-wide text-gray-600">
                            Featured In
                          </h4>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {item.recipes.map((recipeName) => (
                              <span
                                key={recipeName}
                                className="rounded-full bg-white/80 border border-orange-200 px-3 py-1 text-xs font-medium text-orange-700 shadow-sm"
                              >
                                {recipeName}
                              </span>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="bg-white/80 border-orange-200 text-orange-500 hover:bg-orange-100" />
            <CarouselNext className="bg-white/80 border-orange-200 text-orange-500 hover:bg-orange-100" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
