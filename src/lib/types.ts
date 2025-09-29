export type Ingredient = {
  name: string;
  quantity: string;
};

export type Recipe = {
  id: string;
  slug: string;
  name: string;
  category:
    | 'Vegan'
    | 'Chicken'
    | 'Pork'
    | 'Beef'
    | 'Seafood'
    | 'Desserts'
    | 'Soups'
    | 'Merienda'
    | 'Rice & Noodles';
  image?: string;
  description: string;
  prepTime: string;
  cookTime: string;
  servings: string;
  ingredients: Ingredient[];
  instructions: string[];
};

export type Category = {
  name:
    | 'Vegan'
    | 'Chicken'
    | 'Pork'
    | 'Beef'
    | 'Seafood'
    | 'Desserts'
    | 'Soups'
    | 'Merienda'
    | 'Rice & Noodles';
  icon: React.ComponentType<{ className?: string }>;
  description: string;
};
