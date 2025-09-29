"use client";

import { useMemo, useState } from 'react';
import { recipes } from '@/lib/data';
import type { Recipe } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { RecipeCard } from '@/components/recipe-card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const daysOfWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
] as const;

type Day = (typeof daysOfWeek)[number];
type MealPlan = Record<Day, string>;

const sortedRecipes = [...recipes].sort((a, b) => a.name.localeCompare(b.name));
const recipesById = new Map<string, Recipe>(recipes.map((recipe) => [recipe.id, recipe]));

const createInitialPlan = (): MealPlan =>
  daysOfWeek.reduce((plan, day) => {
    plan[day] = '';
    return plan;
  }, {} as MealPlan);

export default function MealPlanner() {
  const [mealPlan, setMealPlan] = useState<MealPlan>(() => createInitialPlan());

  const selectedRecipes = useMemo(() => {
    const chosenIds = Object.values(mealPlan).filter(Boolean) as string[];
    return chosenIds
      .map((id) => recipesById.get(id))
      .filter((recipe): recipe is Recipe => Boolean(recipe));
  }, [mealPlan]);

  const shoppingList = useMemo(() => {
    const ingredientMap = new Map<string, { name: string; quantities: Set<string> }>();

    selectedRecipes.forEach((recipe) => {
      recipe.ingredients.forEach(({ name, quantity }) => {
        const key = name.toLowerCase();
        if (!ingredientMap.has(key)) {
          ingredientMap.set(key, { name, quantities: new Set<string>() });
        }
        ingredientMap.get(key)!.quantities.add(quantity);
      });
    });

    return Array.from(ingredientMap.values())
      .map(({ name, quantities }) => ({
        name,
        quantities: Array.from(quantities).sort(),
      }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [selectedRecipes]);

  const clearMealPlan = () => {
    setMealPlan(createInitialPlan());
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <Badge variant="outline" className="text-base px-4 py-2">
          Weekly Planner
        </Badge>
        <h1 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tight text-black mt-4">
          Craft Your Filipino Meal Plan
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
          Pick your favorite dishes for each day and we&rsquo;ll build a shopping list that keeps you organized for the week.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <Card className="border-2 border-orange-200/70 bg-gradient-to-br from-white via-orange-50/40 to-yellow-50/40">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-2xl font-headline">Weekly Selections</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">
                Choose a featured recipe for each day of the week.
              </p>
            </div>
            <Button variant="outline" onClick={clearMealPlan}>
              Clear Week
            </Button>
          </CardHeader>
          <CardContent className="space-y-5">
            {daysOfWeek.map((day) => {
              const selectedId = mealPlan[day];
              const selectedRecipe = selectedId ? recipesById.get(selectedId) : undefined;
              return (
                <div
                  key={day}
                  className="flex flex-col md:flex-row md:items-center gap-3 rounded-xl border border-orange-100 bg-white/70 px-4 py-4 shadow-sm"
                >
                  <div className="md:w-32">
                    <p className="text-sm uppercase tracking-widest text-orange-500 font-semibold">
                      {day}
                    </p>
                    {selectedRecipe && (
                      <span className="text-xs text-muted-foreground">
                        {selectedRecipe.category}
                      </span>
                    )}
                  </div>
                  <div className="flex-1">
                    <Select
                      value={selectedId || 'none'}
                      onValueChange={(value) =>
                        setMealPlan((prev) => ({
                          ...prev,
                          [day]: value === 'none' ? '' : value,
                        }))
                      }
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Choose a recipe" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">No recipe</SelectItem>
                        {sortedRecipes.map((recipe) => (
                          <SelectItem key={recipe.id} value={recipe.id}>
                            {recipe.name} ({recipe.category})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>

        <Card className="border-2 border-amber-200/70 bg-gradient-to-br from-white via-yellow-50/40 to-orange-50/40">
          <CardHeader>
            <CardTitle className="text-2xl font-headline">Auto Shopping List</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              Ingredients grouped across your selected dishes.
            </p>
          </CardHeader>
          <CardContent>
            {shoppingList.length === 0 ? (
              <p className="text-muted-foreground text-sm">
                Pick recipes to see a combined shopping list with aggregated ingredients.
              </p>
            ) : (
              <ul className="space-y-4">
                {shoppingList.map((item) => (
                  <li
                    key={item.name}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-dashed border-orange-200 pb-2"
                  >
                    <span className="font-semibold text-gray-900">{item.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {item.quantities.join(', ')}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      </div>

      {selectedRecipes.length > 0 && (
        <section>
          <div className="text-center mb-8">
            <Badge variant="secondary" className="text-xs uppercase tracking-widest">
              Featured dishes
            </Badge>
            <h2 className="font-headline text-3xl md:text-4xl font-extrabold tracking-tight text-black mt-3">
              This Week&rsquo;s Menu
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-3">
              Tap any recipe to view full instructions, cook-along timers, and cultural bite-sized notes.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {selectedRecipes.map((recipe) => {
              const image = recipe.image
                ? PlaceHolderImages.find((placeholder) => placeholder.id === recipe.image)
                : undefined;
              return <RecipeCard key={recipe.id} recipe={recipe} image={image} />;
            })}
          </div>
        </section>
      )}
    </div>
  );
}
