import type { Recipe, Category } from './types';
import { VeganIcon } from '@/components/icons/vegan-icon';
import { ChickenIcon } from '@/components/icons/chicken-icon';
import { PorkIcon } from '@/components/icons/pork-icon';
import { BeefIcon } from '@/components/icons/beef-icon';
import { Fish, Cake, Soup, Cookie } from 'lucide-react';

export const categories: Category[] = [
  { name: 'Chicken', icon: ChickenIcon, description: "Poultry dishes, Pinoy style." },
  { name: 'Pork', icon: PorkIcon, description: "Hearty and savory pork recipes." },
  { name: 'Beef', icon: BeefIcon, description: "Rich and flavorful beef stews." },
  { name: 'Seafood', icon: Fish, description: "Fresh and delightful seafood dishes." },
  { name: 'Soups', icon: Soup, description: "Warm and nourishing Filipino soups." },
  { name: 'Vegan', icon: VeganIcon, description: "Plant-based Filipino delights." },
  { name: 'Desserts', icon: Cake, description: "Sweet treats to complete your meal." },
  { name: 'Merienda', icon: Cookie, description: "Filipino snacks and afternoon treats." },
];

export const recipes: Recipe[] = [
  // ==================== CHICKEN RECIPES ====================
  {
    id: '1',
    slug: 'adobo',
    name: 'Chicken Adobo',
    category: 'Chicken',
    image: 'adobo',
    description: 'A classic Filipino dish made with chicken stewed in soy sauce, vinegar, and garlic.',
    prepTime: '15 minutes',
    cookTime: '45 minutes',
    servings: '4',
    ingredients: [
      { quantity: '1 kg', name: 'chicken, cut into serving pieces' },
      { quantity: '1/2 cup', name: 'soy sauce' },
      { quantity: '1/2 cup', name: 'vinegar' },
      { quantity: '1 head', name: 'garlic, minced' },
      { quantity: '1 tsp', name: 'peppercorns' },
      { quantity: '3 pcs', name: 'bay leaves' }
    ],
    instructions: [
      'Combine chicken, soy sauce, vinegar, garlic, peppercorns, and bay leaves in a pot.',
      'Bring to a boil, then lower heat and simmer until chicken is tender.',
      'Let the sauce reduce until thickened.',
      'Serve hot with steamed rice.'
    ]
  },
  {
    id: '2',
    slug: 'afritada',
    name: 'Chicken Afritada',
    category: 'Chicken',
    image: 'afritada',
    description: 'Chicken braised in tomato sauce with potatoes, carrots, and bell peppers.',
    prepTime: '20 minutes',
    cookTime: '1 hour',
    servings: '5',
    ingredients: [
      { quantity: '1 kg', name: 'chicken, cut into serving pieces' },
      { quantity: '2 pcs', name: 'potatoes, cubed' },
      { quantity: '2 pcs', name: 'carrots, sliced' },
      { quantity: '1 cup', name: 'tomato sauce' },
      { quantity: '1 pc', name: 'bell pepper, sliced' }
    ],
    instructions: [
      'Sauté garlic and onion in a pan.',
      'Add chicken and cook until lightly browned.',
      'Pour in tomato sauce and simmer until chicken is tender.',
      'Add potatoes and carrots and cook until soft.',
      'Add bell pepper before serving.'
    ]
  },
  {
    id: '3',
    slug: 'tinolang-manok',
    name: 'Tinolang Manok',
    category: 'Chicken',
    image: 'tinola',
    description: 'A light ginger-based chicken soup with green papaya and chili leaves.',
    prepTime: '15 minutes',
    cookTime: '40 minutes',
    servings: '4',
    ingredients: [
      { quantity: '1 whole', name: 'chicken, cut into serving pieces' },
      { quantity: '1 thumb', name: 'ginger, sliced' },
      { quantity: '1 medium', name: 'green papaya, sliced' },
      { quantity: '2 tbsp', name: 'fish sauce' },
      { quantity: '1 bunch', name: 'chili leaves (dahon ng sili)' },
      { quantity: '6 cups', name: 'water' }
    ],
    instructions: [
      'Sauté garlic, onion, and ginger until fragrant.',
      'Add chicken and cook until lightly browned.',
      'Pour in water and bring to a boil, skimming off scum.',
      'Add fish sauce and simmer until chicken is tender.',
      'Add papaya and cook until soft.',
      'Stir in chili leaves and simmer for 2 more minutes before serving.'
    ]
  },
  {
    id: '4',
    slug: 'chicken-curry',
    name: 'Chicken Curry',
    category: 'Chicken',
    image: 'chicken-curry',
    description: 'A Filipino-style curry with coconut milk, potatoes, and carrots.',
    prepTime: '20 minutes',
    cookTime: '45 minutes',
    servings: '5',
    ingredients: [
      { quantity: '1 kg', name: 'chicken, cut into serving pieces' },
      { quantity: '2 tbsp', name: 'curry powder' },
      { quantity: '2 pcs', name: 'potatoes, cubed' },
      { quantity: '2 pcs', name: 'carrots, sliced' },
      { quantity: '1 cup', name: 'coconut milk' },
      { quantity: '1 medium', name: 'bell pepper, sliced' }
    ],
    instructions: [
      'Sauté onion, garlic, and ginger until fragrant.',
      'Add chicken and cook until no longer pink.',
      'Stir in curry powder and mix well.',
      'Add potatoes, carrots, and coconut milk, then simmer until tender.',
      'Season with salt and pepper, then add bell pepper before serving.'
    ]
  },
  {
    id: '29',
    slug: 'chicken-inasal',
    name: 'Chicken Inasal',
    category: 'Chicken',
    image: 'chicken-inasal',
    description: 'Grilled chicken marinated in lemongrass, annatto, and calamansi - a Bacolod specialty.',
    prepTime: '30 minutes',
    cookTime: '45 minutes',
    servings: '6',
    ingredients: [
      { quantity: '6 pcs', name: 'chicken thighs, with slits' },
      { quantity: '1/4 cup', name: 'lemongrass, pounded' },
      { quantity: '8 cloves', name: 'garlic, pounded' },
      { quantity: '2 tbsp', name: 'ginger, pounded' },
      { quantity: '1/2 cup', name: 'annatto oil' },
      { quantity: '1/4 cup', name: 'brown sugar' },
      { quantity: '1/4 cup', name: 'cane vinegar' },
      { quantity: '2 tbsp', name: 'salt' },
      { quantity: '2 tbsp', name: 'calamansi juice' },
      { quantity: '2 tbsp', name: 'liquid seasoning' },
      { quantity: '1 tsp', name: 'ground black pepper' }
    ],
    instructions: [
      'Pound lemongrass, garlic, ginger, and salt in a mortar and pestle.',
      'Mix pounded aromatics with annatto oil, brown sugar, vinegar, calamansi juice, liquid seasoning, and pepper.',
      'Marinate chicken in the mixture for at least 1 hour or overnight.',
      'Grill chicken over medium heat for 30-40 minutes, basting frequently.',
      'Cook until internal temperature reaches 165°F and skin is charred.',
      'Serve hot with rice and atchara.'
    ]
  },
  {
    id: '36',
    slug: 'chicken-tocino',
    name: 'Chicken Tocino',
    category: 'Chicken',
    image: 'chicken-tocino',
    description: 'Sweet and garlicky Filipino cured chicken marinated in pineapple juice.',
    prepTime: '20 minutes',
    cookTime: '15 minutes',
    servings: '4',
    ingredients: [
      { quantity: '1 kg', name: 'chicken thighs, sliced thin' },
      { quantity: '1/2 cup', name: 'pineapple juice' },
      { quantity: '1/4 cup', name: 'brown sugar' },
      { quantity: '3 tbsp', name: 'soy sauce' },
      { quantity: '2 tbsp', name: 'tomato ketchup' },
      { quantity: '6 cloves', name: 'garlic, minced' },
      { quantity: '1 tsp', name: 'salt' },
      { quantity: '1/2 tsp', name: 'ground black pepper' }
    ],
    instructions: [
      'Mix pineapple juice, brown sugar, soy sauce, ketchup, garlic, salt, and pepper.',
      'Marinate chicken in the mixture for at least 2 hours or overnight.',
      'Pan-fry chicken over medium heat until caramelized and cooked through.',
      'Serve with garlic fried rice and fried egg for a complete meal.'
    ]
  },
  {
    id: '37',
    slug: 'chicken-longganisa',
    name: 'Chicken Longganisa',
    category: 'Chicken',
    image: 'chicken-longganisa',
    description: 'Filipino chicken sausage with sweet and garlicky flavors.',
    prepTime: '30 minutes',
    cookTime: '20 minutes',
    servings: '6',
    ingredients: [
      { quantity: '1 kg', name: 'ground chicken' },
      { quantity: '1/4 cup', name: 'brown sugar' },
      { quantity: '3 tbsp', name: 'soy sauce' },
      { quantity: '2 tbsp', name: 'vinegar' },
      { quantity: '8 cloves', name: 'garlic, minced' },
      { quantity: '1 tsp', name: 'salt' },
      { quantity: '1/2 tsp', name: 'ground black pepper' },
      { quantity: '1/4 tsp', name: 'paprika' }
    ],
    instructions: [
      'Mix all ingredients in a bowl until well combined.',
      'Form mixture into sausage shapes or patties.',
      'Refrigerate for at least 1 hour to firm up.',
      'Pan-fry over medium heat until golden brown and cooked through.',
      'Serve with garlic rice and pickled vegetables.'
    ]
  },
  {
    id: '38',
    slug: 'chicken-barbecue',
    name: 'Filipino Chicken Barbecue',
    category: 'Chicken',
    image: 'chicken-barbecue',
    description: 'Sweet and savory grilled chicken with Filipino-style marinade.',
    prepTime: '25 minutes',
    cookTime: '30 minutes',
    servings: '6',
    ingredients: [
      { quantity: '1 whole', name: 'chicken, cut into pieces' },
      { quantity: '1/2 cup', name: 'soy sauce' },
      { quantity: '1/4 cup', name: 'calamansi juice' },
      { quantity: '1/4 cup', name: 'brown sugar' },
      { quantity: '2 tbsp', name: 'tomato ketchup' },
      { quantity: '6 cloves', name: 'garlic, minced' },
      { quantity: '1 tsp', name: 'ground black pepper' },
      { quantity: '2 tbsp', name: 'cooking oil' }
    ],
    instructions: [
      'Combine soy sauce, calamansi juice, brown sugar, ketchup, garlic, and pepper.',
      'Marinate chicken in the mixture for at least 2 hours.',
      'Grill chicken over medium coals, basting frequently with marinade.',
      'Cook until internal temperature reaches 165°F.',
      'Serve hot with rice and atchara.'
    ]
  },
  {
    id: '39',
    slug: 'chicken-pastel',
    name: 'Chicken Pastel',
    category: 'Chicken',
    image: 'chicken-pastel',
    description: 'Filipino chicken pie with vegetables in creamy sauce topped with pastry.',
    prepTime: '40 minutes',
    cookTime: '45 minutes',
    servings: '8',
    ingredients: [
      { quantity: '1 kg', name: 'chicken, cut into pieces' },
      { quantity: '2 pcs', name: 'potatoes, cubed' },
      { quantity: '2 pcs', name: 'carrots, sliced' },
      { quantity: '1 cup', name: 'green peas' },
      { quantity: '1 can', name: 'evaporated milk' },
      { quantity: '2 tbsp', name: 'all-purpose flour' },
      { quantity: '1 pc', name: 'onion, chopped' },
      { quantity: '3 cloves', name: 'garlic, minced' },
      { quantity: '2 sheets', name: 'puff pastry' }
    ],
    instructions: [
      'Sauté chicken until golden brown. Set aside.',
      'Cook vegetables until tender.',
      'Make white sauce with flour and evaporated milk.',
      'Combine chicken, vegetables, and sauce in baking dish.',
      'Cover with puff pastry and bake at 375°F for 25-30 minutes.',
      'Serve hot as a complete meal.'
    ]
  },
  {
    id: '40',
    slug: 'chicken-relleno',
    name: 'Chicken Relleno',
    category: 'Chicken',
    image: 'chicken-relleno',
    description: 'Deboned whole chicken stuffed with ground pork, sausage, and vegetables.',
    prepTime: '60 minutes',
    cookTime: '1 hour 30 minutes',
    servings: '8',
    ingredients: [
      { quantity: '1 whole', name: 'chicken, deboned' },
      { quantity: '500 g', name: 'ground pork' },
      { quantity: '2 pcs', name: 'hotdogs, diced' },
      { quantity: '3 pcs', name: 'hard-boiled eggs, sliced' },
      { quantity: '1 pc', name: 'carrot, diced' },
      { quantity: '1/4 cup', name: 'raisins' },
      { quantity: '1/4 cup', name: 'sweet pickle relish' },
      { quantity: '1 pc', name: 'onion, minced' },
      { quantity: '3 cloves', name: 'garlic, minced' }
    ],
    instructions: [
      'Carefully debone whole chicken, keeping skin intact.',
      'Sauté ground pork with onion and garlic.',
      'Mix cooked pork with hotdogs, eggs, carrots, raisins, and relish.',
      'Stuff chicken with the mixture and sew closed.',
      'Roast in oven at 350°F for 1.5 hours until golden.',
      'Slice and serve with gravy.'
    ]
  },
  {
    id: '41',
    slug: 'chicken-cordon-bleu-filipino',
    name: 'Filipino Chicken Cordon Bleu',
    category: 'Chicken',
    image: 'chicken-cordon-bleu-filipino',
    description: 'Filipino version of cordon bleu with ham, cheese, and sweet sauce.',
    prepTime: '30 minutes',
    cookTime: '25 minutes',
    servings: '4',
    ingredients: [
      { quantity: '4 pcs', name: 'chicken breast, butterflied' },
      { quantity: '4 slices', name: 'ham' },
      { quantity: '4 slices', name: 'cheese' },
      { quantity: '2 cups', name: 'breadcrumbs' },
      { quantity: '2 pcs', name: 'eggs, beaten' },
      { quantity: '1 cup', name: 'all-purpose flour' },
      { quantity: '2 cups', name: 'cooking oil' }
    ],
    instructions: [
      'Pound chicken breast to flatten.',
      'Place ham and cheese on chicken, roll and secure with toothpicks.',
      'Dredge in flour, dip in beaten eggs, then coat with breadcrumbs.',
      'Deep fry until golden brown and cooked through.',
      'Serve with sweet and sour sauce and rice.'
    ]
  },
  {
    id: '42',
    slug: 'chicken-binakol',
    name: 'Chicken Binakol',
    category: 'Chicken',
    image: 'chicken-binakol',
    description: 'Filipino chicken soup cooked in coconut water with green papaya.',
    prepTime: '20 minutes',
    cookTime: '45 minutes',
    servings: '6',
    ingredients: [
      { quantity: '1 whole', name: 'chicken, cut into pieces' },
      { quantity: '2 cups', name: 'coconut water' },
      { quantity: '1 cup', name: 'coconut milk' },
      { quantity: '1 pc', name: 'green papaya, sliced' },
      { quantity: '1 pc', name: 'lemongrass' },
      { quantity: '1 thumb', name: 'ginger, sliced' },
      { quantity: '2 pcs', name: 'chili leaves' },
      { quantity: '2 tbsp', name: 'fish sauce' }
    ],
    instructions: [
      'Sauté ginger and lemongrass until fragrant.',
      'Add chicken and cook until lightly browned.',
      'Pour coconut water and simmer until chicken is tender.',
      'Add green papaya and cook until soft.',
      'Pour coconut milk and season with fish sauce.',
      'Add chili leaves before serving.'
    ]
  },
  {
    id: '43',
    slug: 'chicken-galantina',
    name: 'Chicken Galantina',
    category: 'Chicken',
    image: 'chicken-galantina',
    description: 'Stuffed chicken roll with ground pork, sausage, and vegetables.',
    prepTime: '50 minutes',
    cookTime: '1 hour',
    servings: '8',
    ingredients: [
      { quantity: '1 whole', name: 'chicken, deboned' },
      { quantity: '300 g', name: 'ground pork' },
      { quantity: '2 pcs', name: 'chorizo, diced' },
      { quantity: '3 pcs', name: 'hard-boiled eggs' },
      { quantity: '1/4 cup', name: 'green peas' },
      { quantity: '1 pc', name: 'red bell pepper, strips' },
      { quantity: '1 pc', name: 'onion, minced' },
      { quantity: '2 tbsp', name: 'breadcrumbs' }
    ],
    instructions: [
      'Debone chicken carefully, keeping skin intact.',
      'Mix ground pork with onion, breadcrumbs, and seasonings.',
      'Lay chicken flat, spread pork mixture, add eggs and vegetables.',
      'Roll tightly and wrap in aluminum foil.',
      'Steam for 1 hour until cooked through.',
      'Cool, slice, and serve cold or at room temperature.'
    ]
  },
  {
    id: '44',
    slug: 'chicken-mechado',
    name: 'Chicken Mechado',
    category: 'Chicken',
    image: 'chicken-mechado',
    description: 'Filipino chicken stew in tomato sauce with potatoes and bell peppers.',
    prepTime: '20 minutes',
    cookTime: '50 minutes',
    servings: '6',
    ingredients: [
      { quantity: '1 kg', name: 'chicken, cut into pieces' },
      { quantity: '2 pcs', name: 'potatoes, cubed' },
      { quantity: '1 cup', name: 'tomato sauce' },
      { quantity: '1 pc', name: 'red bell pepper, strips' },
      { quantity: '1 pc', name: 'green bell pepper, strips' },
      { quantity: '1 pc', name: 'onion, sliced' },
      { quantity: '4 cloves', name: 'garlic, minced' },
      { quantity: '2 tbsp', name: 'soy sauce' }
    ],
    instructions: [
      'Brown chicken pieces in oil. Set aside.',
      'Sauté garlic and onion until fragrant.',
      'Add tomato sauce and soy sauce, simmer.',
      'Return chicken to pot, add potatoes.',
      'Cook until chicken is tender and potatoes are soft.',
      'Add bell peppers and cook for 5 more minutes.'
    ]
  },
  {
    id: '45',
    slug: 'chicken-paksiw',
    name: 'Chicken Paksiw',
    category: 'Chicken',
    image: 'chicken-paksiw',
    description: 'Filipino chicken braised in vinegar with soy sauce and spices.',
    prepTime: '15 minutes',
    cookTime: '40 minutes',
    servings: '6',
    ingredients: [
      { quantity: '1 kg', name: 'chicken, cut into pieces' },
      { quantity: '1/2 cup', name: 'vinegar' },
      { quantity: '1/4 cup', name: 'soy sauce' },
      { quantity: '1 head', name: 'garlic, crushed' },
      { quantity: '1 pc', name: 'onion, sliced' },
      { quantity: '1 tsp', name: 'peppercorns' },
      { quantity: '3 pcs', name: 'bay leaves' },
      { quantity: '2 tbsp', name: 'brown sugar' }
    ],
    instructions: [
      'Combine chicken, vinegar, soy sauce, garlic, onion, peppercorns, and bay leaves.',
      'Bring to boil without stirring, then simmer covered for 20 minutes.',
      'Add brown sugar and continue cooking until chicken is tender.',
      'Let sauce reduce until thick.',
      'Serve hot with steamed rice.'
    ]
  },

  // ==================== PORK RECIPES ====================
  {
    id: '5',
    slug: 'adobo',
    name: 'Pork Adobo',
    category: 'Pork',
    image: 'pork-adobo',
    description: 'The pork variation of the classic adobo, rich and savory.',
    prepTime: '15 minutes',
    cookTime: '1 hour',
    servings: '4',
    ingredients: [
      { quantity: '1 kg', name: 'pork belly, cut into cubes' },
      { quantity: '1/2 cup', name: 'soy sauce' },
      { quantity: '1/2 cup', name: 'vinegar' },
      { quantity: '1 head', name: 'garlic, minced' },
      { quantity: '1 tsp', name: 'peppercorns' },
      { quantity: '3 pcs', name: 'bay leaves' }
    ],
    instructions: [
      'Combine pork, soy sauce, vinegar, garlic, peppercorns, and bay leaves in a pot.',
      'Bring to a boil, then lower heat and simmer until pork is tender.',
      'Let the sauce reduce until thickened.',
      'Serve hot with steamed rice.'
    ]
  },
  {
    id: '6',
    slug: 'menudo',
    name: 'Pork Menudo',
    category: 'Pork',
    image: 'pork-menudo',
    description: 'A tomato-based stew with pork, liver, potatoes, carrots, and raisins.',
    prepTime: '20 minutes',
    cookTime: '1 hour',
    servings: '5',
    ingredients: [
      { quantity: '1 kg', name: 'pork, cubed' },
      { quantity: '200 g', name: 'pork liver, cubed' },
      { quantity: '2 pcs', name: 'potatoes, cubed' },
      { quantity: '2 pcs', name: 'carrots, cubed' },
      { quantity: '1 cup', name: 'tomato sauce' },
      { quantity: '1/4 cup', name: 'raisins' }
    ],
    instructions: [
      'Sauté garlic and onion in a pan.',
      'Add pork and cook until lightly browned.',
      'Pour in tomato sauce and simmer until pork is tender.',
      'Add potatoes, carrots, and liver, and cook until soft.',
      'Stir in raisins before serving.'
    ]
  },
  {
    id: '7',
    slug: 'pork-sinigang',
    name: 'Pork Sinigang',
    category: 'Pork',
    image: 'pork-sinigang',
    description: 'A sour tamarind-based soup with pork and assorted vegetables.',
    prepTime: '15 minutes',
    cookTime: '1 hour',
    servings: '5',
    ingredients: [
      { quantity: '1 kg', name: 'pork belly or ribs, cut into serving pieces' },
      { quantity: '1 pack', name: 'sinigang mix or fresh tamarind' },
      { quantity: '2 pcs', name: 'tomatoes, quartered' },
      { quantity: '1 medium', name: 'radish, sliced' },
      { quantity: '1 bunch', name: 'kangkong (water spinach)' },
      { quantity: '6 cups', name: 'water' },
      { quantity: '2 pcs', name: 'green chili peppers' }
    ],
    instructions: [
      'In a pot, bring water to a boil and add pork. Simmer until tender, skimming off scum.',
      'Add onions and tomatoes, then continue simmering.',
      'Stir in sinigang mix or fresh tamarind extract.',
      'Add radish and simmer until half cooked.',
      'Add kangkong and green chili peppers. Simmer for 2 more minutes.',
      'Serve hot with steamed rice.'
    ]
  },
  {
    id: '8',
    slug: 'lechon-kawali',
    name: 'Lechon Kawali',
    category: 'Pork',
    image: 'lechon-kawali',
    description: 'Crispy deep-fried pork belly served with a dipping sauce.',
    prepTime: '20 minutes',
    cookTime: '1 hour',
    servings: '6',
    ingredients: [
      { quantity: '1 kg', name: 'pork belly' },
      { quantity: '1 tbsp', name: 'peppercorns' },
      { quantity: '5 cloves', name: 'garlic, crushed' },
      { quantity: '2 pcs', name: 'bay leaves' },
      { quantity: '1 tbsp', name: 'salt' },
      { quantity: 'oil', name: 'for deep frying' }
    ],
    instructions: [
      'Boil pork belly in water with garlic, peppercorns, bay leaves, and salt until tender.',
      'Drain and let the pork belly cool. Pat dry.',
      'Deep fry in hot oil until golden brown and crispy.',
      'Drain on paper towels before slicing.',
      'Serve with lechon sauce or vinegar dip.'
    ]
  },
  {
    id: '30',
    slug: 'crispy-pata',
    name: 'Crispy Pata',
    category: 'Pork',
    image: 'pork-pata',
    description: 'Deep-fried pork leg that is crispy on the outside and tender inside.',
    prepTime: '30 minutes',
    cookTime: '3 hours',
    servings: '8',
    ingredients: [
      { quantity: '1 whole', name: 'pork leg (pata)' },
      { quantity: '1 cup', name: 'vinegar' },
      { quantity: '1 can', name: '7-up or Sprite' },
      { quantity: '1 head', name: 'garlic, minced' },
      { quantity: '1 tbsp', name: 'peppercorns' },
      { quantity: '3 pcs', name: 'bay leaves' },
      { quantity: '1/3 cup', name: 'salt' },
      { quantity: '5 cups', name: 'oil for frying' }
    ],
    instructions: [
      'Clean pork leg and trim nails. Scrape off any stray hairs.',
      'Boil pork leg with vinegar, 7-up, water, garlic, peppercorns, bay leaves, and salt for 1.5-2 hours until tender.',
      'Drain and let cool. Sprinkle with salt and massage all over.',
      'Freeze overnight to ensure crispiness when fried.',
      'Heat oil to 350°F in a large pot.',
      'Deep-fry pork leg until golden brown and crispy.',
      'Drain on wire rack and let rest before chopping.',
      'Serve with spiced vinegar dipping sauce.'
    ]
  },
  {
    id: '46',
    slug: 'pork-morcon',
    name: 'Pork Morcon',
    category: 'Pork',
    image: 'pork-morcon',
    description: 'Filipino stuffed pork roll with sausage, eggs, and vegetables in tomato sauce.',
    prepTime: '45 minutes',
    cookTime: '2 hours',
    servings: '8',
    ingredients: [
      { quantity: '1 kg', name: 'pork shoulder, sliced thin and wide' },
      { quantity: '2 pcs', name: 'chorizo, whole' },
      { quantity: '3 pcs', name: 'hard-boiled eggs' },
      { quantity: '2 pcs', name: 'carrots, strips' },
      { quantity: '1 pc', name: 'red bell pepper, strips' },
      { quantity: '1 cup', name: 'tomato sauce' },
      { quantity: '2 cups', name: 'beef broth' },
      { quantity: '1 pc', name: 'onion, chopped' }
    ],
    instructions: [
      'Lay pork flat, season with salt and pepper.',
      'Place chorizo, eggs, carrots, and bell pepper on pork.',
      'Roll tightly and tie with kitchen string.',
      'Brown the roll on all sides.',
      'Add tomato sauce and broth, simmer for 1.5-2 hours.',
      'Slice and serve with the sauce.'
    ]
  },
  {
    id: '47',
    slug: 'pork-hamonado',
    name: 'Pork Hamonado',
    category: 'Pork',
    image: 'pork-hamonado',
    description: 'Sweet and savory Filipino pork stew with pineapple.',
    prepTime: '20 minutes',
    cookTime: '1 hour 30 minutes',
    servings: '6',
    ingredients: [
      { quantity: '1 kg', name: 'pork shoulder, cubed' },
      { quantity: '1 cup', name: 'pineapple chunks' },
      { quantity: '1/2 cup', name: 'pineapple juice' },
      { quantity: '1/4 cup', name: 'soy sauce' },
      { quantity: '1/4 cup', name: 'brown sugar' },
      { quantity: '1 pc', name: 'onion, chopped' },
      { quantity: '4 cloves', name: 'garlic, minced' },
      { quantity: '2 pcs', name: 'bay leaves' }
    ],
    instructions: [
      'Brown pork pieces in oil. Set aside.',
      'Sauté garlic and onion until fragrant.',
      'Return pork, add soy sauce, pineapple juice, and brown sugar.',
      'Add bay leaves and simmer for 1 hour until tender.',
      'Add pineapple chunks and cook for 10 more minutes.',
      'Serve hot with steamed rice.'
    ]
  },
  {
    id: '48',
    slug: 'pork-igado',
    name: 'Pork Igado',
    category: 'Pork',
    image: 'pork-igado',
    description: 'Ilocano pork and liver stew with vegetables in savory sauce.',
    prepTime: '25 minutes',
    cookTime: '45 minutes',
    servings: '6',
    ingredients: [
      { quantity: '500 g', name: 'pork shoulder, cubed' },
      { quantity: '300 g', name: 'pork liver, cubed' },
      { quantity: '2 pcs', name: 'red bell peppers, strips' },
      { quantity: '1 cup', name: 'green peas' },
      { quantity: '1/4 cup', name: 'soy sauce' },
      { quantity: '2 tbsp', name: 'vinegar' },
      { quantity: '1 pc', name: 'onion, sliced' },
      { quantity: '4 cloves', name: 'garlic, minced' }
    ],
    instructions: [
      'Brown pork pieces in oil. Set aside.',
      'Sauté garlic and onion until fragrant.',
      'Add pork back, pour soy sauce and vinegar.',
      'Simmer until pork is tender, about 30 minutes.',
      'Add liver and cook for 10 minutes.',
      'Add bell peppers and peas, cook until tender.'
    ]
  },
  {
    id: '49',
    slug: 'dinuguan',
    name: 'Dinuguan',
    category: 'Pork',
    image: 'pork-dinuguan',
    description: 'Filipino pork blood stew with tender pork pieces in rich, dark sauce.',
    prepTime: '20 minutes',
    cookTime: '45 minutes',
    servings: '6',
    ingredients: [
      { quantity: '1 kg', name: 'pork shoulder, cubed' },
      { quantity: '2 cups', name: 'pork blood' },
      { quantity: '1/4 cup', name: 'vinegar' },
      { quantity: '2 pcs', name: 'green chili peppers' },
      { quantity: '1 pc', name: 'onion, chopped' },
      { quantity: '6 cloves', name: 'garlic, minced' },
      { quantity: '2 tbsp', name: 'fish sauce' },
      { quantity: '2 pcs', name: 'bay leaves' }
    ],
    instructions: [
      'Sauté garlic and onion until fragrant.',
      'Add pork and cook until browned.',
      'Pour vinegar and let it boil without stirring.',
      'Add fish sauce and bay leaves, simmer until pork is tender.',
      'Slowly add pork blood while stirring continuously.',
      'Add chili peppers and simmer for 10 more minutes.'
    ]
  },
  {
    id: '50',
    slug: 'pork-binagoongan',
    name: 'Pork Binagoongan',
    category: 'Pork',
    image: 'pork-binagoongan',
    description: 'Pork cooked in shrimp paste with vegetables and coconut milk.',
    prepTime: '20 minutes',
    cookTime: '50 minutes',
    servings: '6',
    ingredients: [
      { quantity: '1 kg', name: 'pork belly, cubed' },
      { quantity: '3 tbsp', name: 'shrimp paste (bagoong)' },
      { quantity: '1 cup', name: 'coconut milk' },
      { quantity: '2 pcs', name: 'eggplants, sliced' },
      { quantity: '1 bunch', name: 'string beans, cut' },
      { quantity: '2 pcs', name: 'tomatoes, chopped' },
      { quantity: '1 pc', name: 'onion, sliced' },
      { quantity: '4 cloves', name: 'garlic, minced' }
    ],
    instructions: [
      'Sauté garlic, onion, and tomatoes until soft.',
      'Add pork and cook until browned.',
      'Add shrimp paste and mix well.',
      'Pour coconut milk and simmer until pork is tender.',
      'Add vegetables and cook until tender.',
      'Adjust seasoning and serve with rice.'
    ]
  },
  {
    id: '51',
    slug: 'pork-estofado',
    name: 'Pork Estofado',
    category: 'Pork',
    image: 'pork-estofado',
    description: 'Filipino pork stew with banana, potatoes, and sweet sauce.',
    prepTime: '25 minutes',
    cookTime: '1 hour 15 minutes',
    servings: '6',
    ingredients: [
      { quantity: '1 kg', name: 'pork shoulder, cubed' },
      { quantity: '3 pcs', name: 'saba bananas, sliced' },
      { quantity: '2 pcs', name: 'potatoes, cubed' },
      { quantity: '1/4 cup', name: 'soy sauce' },
      { quantity: '1/4 cup', name: 'brown sugar' },
      { quantity: '2 tbsp', name: 'vinegar' },
      { quantity: '1 pc', name: 'onion, chopped' },
      { quantity: '4 cloves', name: 'garlic, minced' }
    ],
    instructions: [
      'Brown pork pieces in oil. Set aside.',
      'Sauté garlic and onion until fragrant.',
      'Return pork, add soy sauce, vinegar, and brown sugar.',
      'Simmer until pork is tender, about 45 minutes.',
      'Add potatoes and cook until soft.',
      'Add bananas and cook for 5 more minutes.'
    ]
  },
  {
    id: '52',
    slug: 'pork-barbecue',
    name: 'Pork Barbecue',
    category: 'Pork',
    image: 'pork-barbeque',
    description: 'Filipino grilled pork skewers with sweet and savory marinade.',
    prepTime: '30 minutes',
    cookTime: '25 minutes',
    servings: '6',
    ingredients: [
      { quantity: '1 kg', name: 'pork shoulder, sliced thin' },
      { quantity: '1/2 cup', name: 'soy sauce' },
      { quantity: '1/4 cup', name: 'brown sugar' },
      { quantity: '1/4 cup', name: 'calamansi juice' },
      { quantity: '2 tbsp', name: 'tomato ketchup' },
      { quantity: '6 cloves', name: 'garlic, minced' },
      { quantity: '1 tsp', name: 'ground black pepper' },
      { quantity: '2 tbsp', name: 'cooking oil' }
    ],
    instructions: [
      'Combine soy sauce, brown sugar, calamansi juice, ketchup, garlic, and pepper.',
      'Marinate pork slices for at least 2 hours.',
      'Thread pork onto skewers.',
      'Grill over medium coals, basting with marinade.',
      'Cook until caramelized and cooked through.',
      'Serve with rice and pickled vegetables.'
    ]
  },
  {
    id: '53',
    slug: 'pork-humba',
    name: 'Pork Humba',
    category: 'Pork',
    image: 'pork-humba',
    description: 'Visayan braised pork belly with fermented black beans and banana blossoms.',
    prepTime: '20 minutes',
    cookTime: '1 hour 30 minutes',
    servings: '6',
    ingredients: [
      { quantity: '1 kg', name: 'pork belly, cubed' },
      { quantity: '2 tbsp', name: 'fermented black beans (tausi)' },
      { quantity: '1/4 cup', name: 'soy sauce' },
      { quantity: '2 tbsp', name: 'brown sugar' },
      { quantity: '1 pc', name: 'banana blossom, sliced' },
      { quantity: '1 pc', name: 'onion, chopped' },
      { quantity: '6 cloves', name: 'garlic, minced' },
      { quantity: '2 pcs', name: 'bay leaves' }
    ],
    instructions: [
      'Brown pork belly pieces in oil.',
      'Sauté garlic and onion until fragrant.',
      'Add fermented black beans and mash slightly.',
      'Return pork, add soy sauce, brown sugar, and bay leaves.',
      'Simmer for 1 hour until pork is tender.',
      'Add banana blossom and cook for 10 more minutes.'
    ]
  },
  {
    id: '54',
    slug: 'pork-sisig-original',
    name: 'Original Pork Sisig',
    category: 'Pork',
    image: 'pork-sisig',
    description: 'The original Kapampangan sisig with grilled pork face and liver.',
    prepTime: '40 minutes',
    cookTime: '1 hour',
    servings: '6',
    ingredients: [
      { quantity: '500 g', name: 'pork face (maskara), boiled and grilled' },
      { quantity: '200 g', name: 'pork liver, boiled and chopped' },
      { quantity: '3 pcs', name: 'onions, chopped' },
      { quantity: '3 pcs', name: 'chili peppers, chopped' },
      { quantity: '1/4 cup', name: 'calamansi juice' },
      { quantity: '2 tbsp', name: 'mayonnaise' },
      { quantity: '1 pc', name: 'egg' },
      { quantity: '2 tbsp', name: 'margarine' }
    ],
    instructions: [
      'Boil pork face until tender, then grill until crispy.',
      'Chop grilled pork face and boiled liver finely.',
      'Sauté onions and chili peppers in margarine.',
      'Add chopped pork and liver, mix well.',
      'Season with calamansi juice and mayonnaise.',
      'Serve on sizzling plate topped with raw egg.'
    ]
  },
  {
    id: '55',
    slug: 'pork-bopis',
    name: 'Pork Bopis',
    category: 'Pork',
    image: 'pork-bopis',
    description: 'Spicy Filipino dish made with pork lungs and heart in tomato sauce.',
    prepTime: '30 minutes',
    cookTime: '45 minutes',
    servings: '6',
    ingredients: [
      { quantity: '500 g', name: 'pork lungs, boiled and chopped' },
      { quantity: '300 g', name: 'pork heart, boiled and chopped' },
      { quantity: '2 pcs', name: 'tomatoes, chopped' },
      { quantity: '2 pcs', name: 'onions, chopped' },
      { quantity: '6 cloves', name: 'garlic, minced' },
      { quantity: '3 pcs', name: 'chili peppers, chopped' },
      { quantity: '2 tbsp', name: 'tomato paste' },
      { quantity: '1 tsp', name: 'paprika' }
    ],
    instructions: [
      'Boil pork organs until tender, then chop finely.',
      'Sauté garlic, onions, and tomatoes until soft.',
      'Add tomato paste and paprika, cook for 2 minutes.',
      'Add chopped organs and mix well.',
      'Season with salt, pepper, and chili peppers.',
      'Simmer until flavors are well combined.'
    ]
  },

  // ==================== BEEF RECIPES ====================
  {
    id: '9',
    slug: 'beef-kaldereta',
    name: 'Beef Kaldereta',
    category: 'Beef',
    image: 'beef-caldereta',
    description: 'A rich tomato-based beef stew with potatoes, carrots, and bell peppers.',
    prepTime: '20 minutes',
    cookTime: '1 hour 30 minutes',
    servings: '6',
    ingredients: [
      { quantity: '1 kg', name: 'beef, cubed' },
      { quantity: '2 pcs', name: 'potatoes, cubed' },
      { quantity: '2 pcs', name: 'carrots, cubed' },
      { quantity: '1 cup', name: 'tomato sauce' },
      { quantity: '1/2 cup', name: 'liver spread' },
      { quantity: '1 pc', name: 'red bell pepper, sliced' },
      { quantity: '1 pc', name: 'green bell pepper, sliced' }
    ],
    instructions: [
      'Sauté garlic and onion in a pot.',
      'Add beef and cook until browned.',
      'Pour in tomato sauce and simmer until beef is tender.',
      'Add liver spread, potatoes, and carrots. Cook until vegetables are soft.',
      'Stir in bell peppers and simmer for 5 minutes.',
      'Serve hot with rice.'
    ]
  },
  {
    id: '10',
    slug: 'beef-nilaga',
    name: 'Beef Nilaga',
    category: 'Beef',
    image: 'beef-nilaga',
    description: 'A light and comforting boiled beef soup with vegetables.',
    prepTime: '15 minutes',
    cookTime: '1 hour 30 minutes',
    servings: '6',
    ingredients: [
      { quantity: '1 kg', name: 'beef shank or short ribs' },
      { quantity: '6 cups', name: 'water' },
      { quantity: '2 pcs', name: 'corn on the cob, cut into halves' },
      { quantity: '2 pcs', name: 'potatoes, quartered' },
      { quantity: '1 small', name: 'cabbage, quartered' },
      { quantity: '1 bunch', name: 'pechay or bok choy' }
    ],
    instructions: [
      'In a pot, bring water to a boil and add beef. Simmer until tender, skimming off scum.',
      'Add corn and potatoes. Continue simmering until cooked.',
      'Add cabbage and pechay and cook for another 3–5 minutes.',
      'Season with fish sauce and pepper to taste.',
      'Serve hot with rice.'
    ]
  },
  {
    id: '11',
    slug: 'beef-tapa',
    name: 'Beef Tapa',
    category: 'Beef',
    image: 'beef-tapa',
    description: 'Thinly sliced beef cured and fried, commonly served with garlic rice and egg.',
    prepTime: '20 minutes',
    cookTime: '15 minutes',
    servings: '4',
    ingredients: [
      { quantity: '500 g', name: 'beef sirloin, thinly sliced' },
      { quantity: '1/4 cup', name: 'soy sauce' },
      { quantity: '2 tbsp', name: 'calamansi juice' },
      { quantity: '4 cloves', name: 'garlic, minced' },
      { quantity: '1 tbsp', name: 'sugar' },
      { quantity: '1 tsp', name: 'ground black pepper' }
    ],
    instructions: [
      'Marinate beef in soy sauce, calamansi juice, garlic, sugar, and pepper for at least 2 hours.',
      'Fry marinated beef in hot oil until cooked and slightly caramelized.',
      'Serve with garlic fried rice and egg (tapsilog style).'
    ]
  },
  {
    id: '12',
    slug: 'beef-bulalo',
    name: 'Beef Bulalo',
    category: 'Beef',
    image: 'beef-bulalo',
    description: 'A Filipino beef marrow stew with corn, pechay, and cabbage.',
    prepTime: '15 minutes',
    cookTime: '2 hours',
    servings: '6',
    ingredients: [
      { quantity: '1 kg', name: 'beef shank with bone marrow' },
      { quantity: '8 cups', name: 'water' },
      { quantity: '2 pcs', name: 'corn on the cob, halved' },
      { quantity: '1 small', name: 'cabbage, quartered' },
      { quantity: '1 bunch', name: 'pechay or bok choy' },
      { quantity: '2 pcs', name: 'potatoes, quartered' },
      { quantity: '1 medium', name: 'onion, quartered' }
    ],
    instructions: [
      'In a large pot, bring water to a boil and add beef shank. Simmer for 1.5 to 2 hours until tender, skimming off scum.',
      'Add corn and potatoes. Cook until vegetables are tender.',
      'Add cabbage and pechay and simmer for 5 more minutes.',
      'Season with fish sauce and pepper to taste.',
      'Serve hot with rice.'
    ]
  },
  {
    id: '56',
    slug: 'bistek-tagalog',
    name: 'Bistek Tagalog',
    category: 'Beef',
    image: 'beef-bistek',
    description: 'Filipino beef steak with onions in soy sauce and calamansi marinade.',
    prepTime: '25 minutes',
    cookTime: '30 minutes',
    servings: '4',
    ingredients: [
      { quantity: '1 kg', name: 'beef sirloin, sliced thin' },
      { quantity: '1/2 cup', name: 'soy sauce' },
      { quantity: '1/4 cup', name: 'calamansi juice' },
      { quantity: '3 pcs', name: 'large onions, sliced into rings' },
      { quantity: '4 cloves', name: 'garlic, minced' },
      { quantity: '1 tsp', name: 'ground black pepper' },
      { quantity: '2 tbsp', name: 'cooking oil' }
    ],
    instructions: [
      'Marinate beef in soy sauce, calamansi juice, and pepper for 30 minutes.',
      'Heat oil and fry onion rings until golden. Set aside.',
      'In same pan, cook marinated beef until tender.',
      'Return onions to pan and simmer for 5 minutes.',
      'Serve hot with steamed rice.'
    ]
  },
  {
    id: '57',
    slug: 'beef-morcon',
    name: 'Beef Morcon',
    category: 'Beef',
    image: 'beef-morcon',
    description: 'Stuffed beef roll with sausage, eggs, and vegetables in rich tomato sauce.',
    prepTime: '50 minutes',
    cookTime: '2 hours 30 minutes',
    servings: '8',
    ingredients: [
      { quantity: '1 kg', name: 'beef flank, sliced thin and wide' },
      { quantity: '2 pcs', name: 'chorizo, whole' },
      { quantity: '3 pcs', name: 'hard-boiled eggs' },
      { quantity: '2 pcs', name: 'carrots, strips' },
      { quantity: '1 pc', name: 'red bell pepper, strips' },
      { quantity: '1 cup', name: 'tomato sauce' },
      { quantity: '2 cups', name: 'beef broth' }
    ],
    instructions: [
      'Lay beef flat and season with salt and pepper.',
      'Place chorizo, eggs, carrots, and bell pepper on beef.',
      'Roll tightly and tie with kitchen string.',
      'Brown the roll on all sides.',
      'Add tomato sauce and broth, simmer for 2-2.5 hours.',
      'Slice and serve with the sauce.'
    ]
  },

  // ==================== SEAFOOD RECIPES ====================
  {
    id: '13',
    slug: 'sinigang-na-hipon',
    name: 'Sinigang na Hipon',
    category: 'Seafood',
    image: 'seafood-hipon',
    description: 'A sour tamarind-based soup with fresh shrimp and vegetables.',
    prepTime: '15 minutes',
    cookTime: '30 minutes',
    servings: '5',
    ingredients: [
      { quantity: '500 g', name: 'shrimp, cleaned' },
      { quantity: '1 pack', name: 'sinigang mix or fresh tamarind extract' },
      { quantity: '2 pcs', name: 'tomatoes, quartered' },
      { quantity: '1 medium', name: 'radish, sliced' },
      { quantity: '1 bunch', name: 'kangkong (water spinach)' },
      { quantity: '2 pcs', name: 'green chili peppers' },
      { quantity: '6 cups', name: 'water' }
    ],
    instructions: [
      'Bring water to a boil and add tomatoes and radish. Simmer until half cooked.',
      'Add shrimp and cook until pink.',
      'Stir in sinigang mix or fresh tamarind extract.',
      'Add kangkong and green chili peppers. Simmer for 2 minutes.',
      'Serve hot with steamed rice.'
    ]
  },
  {
    id: '14',
    slug: 'rellenong-bangus',
    name: 'Rellenong Bangus',
    category: 'Seafood',
    image: 'seafood-relleno',
    description: 'Stuffed milkfish filled with sautéed vegetables and spices.',
    prepTime: '40 minutes',
    cookTime: '1 hour',
    servings: '6',
    ingredients: [
      { quantity: '1 large', name: 'bangus (milkfish)' },
      { quantity: '1 pc', name: 'carrot, minced' },
      { quantity: '1 pc', name: 'potato, minced' },
      { quantity: '1 small', name: 'bell pepper, minced' },
      { quantity: '1 pc', name: 'onion, minced' },
      { quantity: '2 cloves', name: 'garlic, minced' },
      { quantity: '2 tbsp', name: 'soy sauce' }
    ],
    instructions: [
      'Debone and flake the bangus meat. Set aside the skin for stuffing.',
      'Sauté garlic, onion, carrots, potatoes, and bell pepper. Add bangus meat and season with soy sauce.',
      'Stuff the mixture back into the bangus skin and sew or secure it.',
      'Fry until golden brown on all sides.',
      'Slice and serve with rice.'
    ]
  },
  {
    id: '15',
    slug: 'ginataang-alimasag',
    name: 'Ginataang Alimasag',
    category: 'Seafood',
    image: 'seafood-alimasag',
    description: 'Crabs cooked in rich coconut milk with vegetables.',
    prepTime: '20 minutes',
    cookTime: '30 minutes',
    servings: '4',
    ingredients: [
      { quantity: '1 kg', name: 'blue crabs, cleaned' },
      { quantity: '2 cups', name: 'coconut milk' },
      { quantity: '1 pc', name: 'squash, cubed' },
      { quantity: '1 bunch', name: 'string beans, cut into 2-inch pieces' },
      { quantity: '1 thumb-sized', name: 'ginger, sliced' },
      { quantity: '2 cloves', name: 'garlic, minced' },
      { quantity: '2 tbsp', name: 'fish sauce' }
    ],
    instructions: [
      'Sauté garlic, onion, and ginger in a pot.',
      'Add coconut milk and bring to a simmer.',
      'Add crabs and cook until they turn red.',
      'Stir in squash and string beans. Cook until vegetables are tender.',
      'Season with fish sauce to taste and serve hot.'
    ]
  },
  {
    id: '16',
    slug: 'adobong-pusit',
    name: 'Adobong Pusit',
    category: 'Seafood',
    image: 'seafood-pusit',
    description: 'Squid cooked adobo-style with soy sauce, vinegar, and garlic.',
    prepTime: '15 minutes',
    cookTime: '30 minutes',
    servings: '4',
    ingredients: [
      { quantity: '1 kg', name: 'squid, cleaned and sliced into rings' },
      { quantity: '1/2 cup', name: 'soy sauce' },
      { quantity: '1/4 cup', name: 'vinegar' },
      { quantity: '1 head', name: 'garlic, minced' },
      { quantity: '1 pc', name: 'onion, sliced' },
      { quantity: '2 pcs', name: 'bay leaves' },
      { quantity: '1 tsp', name: 'peppercorns' }
    ],
    instructions: [
      'Sauté garlic and onion in a pan.',
      'Add squid and cook for 2–3 minutes.',
      'Pour in soy sauce, vinegar, peppercorns, and bay leaves. Simmer for 10 minutes.',
      'Avoid overcooking squid to keep it tender.',
      'Serve hot with steamed rice.'
    ]
  },
  {
    id: '58',
    slug: 'bangus-sisig',
    name: 'Bangus Sisig',
    category: 'Seafood',
    image: 'seafood-bangus',
    description: 'Flaked milkfish sisig with onions, chili peppers, and citrus.',
    prepTime: '30 minutes',
    cookTime: '25 minutes',
    servings: '4',
    ingredients: [
      { quantity: '2 pcs', name: 'bangus (milkfish), grilled and flaked' },
      { quantity: '3 pcs', name: 'onions, chopped' },
      { quantity: '3 pcs', name: 'chili peppers, chopped' },
      { quantity: '1/4 cup', name: 'calamansi juice' },
      { quantity: '2 tbsp', name: 'mayonnaise' },
      { quantity: '1 pc', name: 'egg' },
      { quantity: '2 tbsp', name: 'margarine' }
    ],
    instructions: [
      'Grill bangus until cooked, then flake meat.',
      'Sauté onions and chili peppers in margarine.',
      'Add flaked bangus and mix well.',
      'Season with calamansi juice and mayonnaise.',
      'Serve on sizzling plate topped with raw egg.'
    ]
  },

  // ==================== SOUPS RECIPES ====================
  {
    id: '68',
    slug: 'mami',
    name: 'Mami',
    category: 'Soups',
    image: 'mami',
    description: 'A Filipino noodle soup influenced by Chinese cuisine, made with chicken, pork, or beef broth.',
    prepTime: '15 minutes',
    cookTime: '40 minutes',
    servings: '4',
    ingredients: [
      { quantity: '300 g', name: 'egg noodles' },
      { quantity: '250 g', name: 'chicken breast or pork, shredded' },
      { quantity: '5 cups', name: 'broth (chicken or pork)' },
      { quantity: '2 tbsp', name: 'soy sauce' },
      { quantity: '1 tbsp', name: 'fish sauce' },
      { quantity: '2 cloves', name: 'garlic, minced' },
      { quantity: '1 pc', name: 'onion, chopped' },
      { quantity: '1 tbsp', name: 'toasted garlic (for garnish)' },
      { quantity: '2 stalks', name: 'spring onions, chopped' }
    ],
    instructions: [
      'Sauté garlic and onion until fragrant.',
      'Add shredded meat and cook briefly.',
      'Pour broth and bring to a boil. Season with soy sauce and fish sauce.',
      'Cook noodles separately, then place in serving bowls.',
      'Pour hot broth with meat over noodles.',
      'Top with toasted garlic and spring onions before serving.'
    ]
  },
  {
    id: '61',
    slug: 'sopas',
    name: 'Sopas',
    category: 'Soups',
    image: 'sopas',
    description: 'A creamy Filipino macaroni soup with chicken, vegetables, and milk.',
    prepTime: '15 minutes',
    cookTime: '45 minutes',
    servings: '6',
    ingredients: [
      { quantity: '250 g', name: 'elbow macaroni' },
      { quantity: '300 g', name: 'chicken breast, shredded' },
      { quantity: '6 cups', name: 'chicken broth' },
      { quantity: '1 pc', name: 'carrot, diced' },
      { quantity: '1 pc', name: 'potato, cubed' },
      { quantity: '1 pc', name: 'onion, chopped' },
      { quantity: '3 cloves', name: 'garlic, minced' },
      { quantity: '1 cup', name: 'evaporated milk' },
      { quantity: '1 tbsp', name: 'butter' },
      { quantity: '1 stalk', name: 'celery, chopped' }
    ],
    instructions: [
      'Sauté garlic, onion, and butter until fragrant.',
      'Add chicken and cook briefly, then pour in broth.',
      'Bring to a boil and add macaroni. Cook until half done.',
      'Add carrots, potato, and celery. Simmer until tender.',
      'Pour in evaporated milk and stir well.',
      'Simmer for 2–3 minutes and serve hot.'
    ]
  },
  {
    id: '64',
    slug: 'papaitan',
    name: 'Papaitan',
    category: 'Soups',
    image: 'papaitan',
    description: 'An Ilocano soup made from beef or goat innards, flavored with bile for a distinctly bitter taste.',
    prepTime: '30 minutes',
    cookTime: '2 hours',
    servings: '5',
    ingredients: [
      { quantity: '500 g', name: 'beef innards (tripe, liver, heart)' },
      { quantity: '300 g', name: 'beef meat, cubed' },
      { quantity: '1 pc', name: 'onion, chopped' },
      { quantity: '5 cloves', name: 'garlic, minced' },
      { quantity: '1 thumb', name: 'ginger, sliced' },
      { quantity: '8 cups', name: 'water' },
      { quantity: '3 tbsp', name: 'fish sauce' },
      { quantity: '1–2 tbsp', name: 'bile (for bitterness)' },
      { quantity: '2 pcs', name: 'green chili peppers' }
    ],
    instructions: [
      'Boil innards and meat until tender, then slice into small pieces.',
      'Sauté garlic, onion, and ginger, then add meat and innards.',
      'Pour water and simmer for 1–2 hours.',
      'Season with fish sauce and add bile gradually until desired bitterness.',
      'Add green chilies before serving.'
    ]
  },
  {
    id: '65',
    slug: 'suam-na-mais',
    name: 'Suam na Mais',
    category: 'Soups',
    image: 'suam-na-mais',
    description: 'A Kapampangan corn soup made with fresh corn kernels, leafy greens, and sometimes pork or shrimp.',
    prepTime: '20 minutes',
    cookTime: '40 minutes',
    servings: '4',
    ingredients: [
      { quantity: '2 cups', name: 'fresh corn kernels' },
      { quantity: '150 g', name: 'pork belly or shrimp' },
      { quantity: '1 pc', name: 'onion, chopped' },
      { quantity: '3 cloves', name: 'garlic, minced' },
      { quantity: '5 cups', name: 'water or broth' },
      { quantity: '1 bunch', name: 'malunggay or spinach leaves' },
      { quantity: '2 tbsp', name: 'fish sauce' }
    ],
    instructions: [
      'Sauté garlic and onion until fragrant.',
      'Add pork belly or shrimp and cook until browned.',
      'Add corn kernels and sauté for 3 minutes.',
      'Pour in water or broth and simmer until corn is tender.',
      'Season with fish sauce.',
      'Add malunggay or spinach leaves before serving.'
    ]
  },{
    id: '66',
    slug: 'sinanglay-na-tilapia',
    name: 'Sinanglay na Tilapia',
    category: 'Soups',
    description: 'A Bicolano dish of tilapia stuffed with tomatoes and onions, simmered in coconut milk with chili leaves.',
    prepTime: '20 minutes',
    cookTime: '50 minutes',
    servings: '4',
    ingredients: [
      { quantity: '2 pcs', name: 'tilapia, cleaned' },
      { quantity: '2 pcs', name: 'tomatoes, chopped' },
      { quantity: '1 pc', name: 'onion, chopped' },
      { quantity: '3 cloves', name: 'garlic, minced' },
      { quantity: '2 cups', name: 'coconut milk' },
      { quantity: '1 bunch', name: 'mustard leaves or pechay' },
      { quantity: '2 pcs', name: 'green chili peppers' },
      { quantity: '2 tbsp', name: 'fish sauce' }
    ],
    instructions: [
      'Stuff tilapia with garlic, onion, and tomatoes.',
      'Wrap each fish with mustard leaves or pechay.',
      'Arrange in a pan and pour in coconut milk.',
      'Season with fish sauce and add green chili peppers.',
      'Simmer gently until fish is cooked and flavors meld.',
      'Serve with steamed rice.'
    ]
  },

  // ==================== VEGAN RECIPES ====================
  {
    id: '17',
    slug: 'pinakbet',
    name: 'Pinakbet',
    category: 'Vegan',
    image: 'ginataang-kalabasa',
    description: 'A mixed vegetable dish sautéed with shrimp paste.',
    prepTime: '20 minutes',
    cookTime: '40 minutes',
    servings: '5',
    ingredients: [
      { quantity: '1 small', name: 'ampalaya (bitter melon), sliced' },
      { quantity: '1 small', name: 'eggplant, sliced' },
      { quantity: '1 cup', name: 'squash, cubed' },
      { quantity: '1 bunch', name: 'sitaw (string beans), cut into 2-inch pieces' },
      { quantity: '2 tbsp', name: 'shrimp paste (bagoong alamang)' },
      { quantity: '2 cloves', name: 'garlic, minced' },
      { quantity: '1 small', name: 'onion, chopped' }
    ],
    instructions: [
      'Sauté garlic and onion in a pan.',
      'Add shrimp paste and stir for a few seconds.',
      'Add squash and cook for 5 minutes.',
      'Add eggplant, ampalaya, and sitaw. Stir fry until half cooked.',
      'Cover and let the vegetables steam in their own juices.',
      'Serve hot with rice.'
    ]
  },
  {
    id: '18',
    slug: 'laing',
    name: 'Laing',
    category: 'Vegan',
    image: 'vegan-laing',
    description: 'Dried taro leaves cooked in coconut milk and chili.',
    prepTime: '15 minutes',
    cookTime: '45 minutes',
    servings: '4',
    ingredients: [
      { quantity: '4 cups', name: 'dried taro leaves' },
      { quantity: '2 cups', name: 'coconut milk' },
      { quantity: '1 cup', name: 'coconut cream' },
      { quantity: '1 thumb-sized', name: 'ginger, sliced' },
      { quantity: '3 cloves', name: 'garlic, minced' },
      { quantity: '2 pcs', name: 'red chili peppers, sliced' },
      { quantity: '2 tbsp', name: 'shrimp paste' }
    ],
    instructions: [
      'In a pot, combine coconut milk, ginger, garlic, chili, and shrimp paste. Bring to a simmer.',
      'Add dried taro leaves on top. Do not stir.',
      'Simmer gently until the leaves absorb the coconut milk.',
      'Pour in coconut cream and cook until thickened.',
      'Serve with steamed rice.'
    ]
  },
  {
    id: '19',
    slug: 'chop-suey',
    name: 'Chop Suey',
    category: 'Vegan',
    image: 'vegan-chopsuey',
    description: 'A stir-fried vegetable medley with meat or shrimp.',
    prepTime: '15 minutes',
    cookTime: '20 minutes',
    servings: '4',
    ingredients: [
      { quantity: '1 cup', name: 'cauliflower florets' },
      { quantity: '1 cup', name: 'broccoli florets' },
      { quantity: '1 pc', name: 'carrot, sliced' },
      { quantity: '1 cup', name: 'snow peas' },
      { quantity: '1/2 cup', name: 'shrimp or chicken (optional)' },
      { quantity: '2 tbsp', name: 'soy sauce' },
      { quantity: '1 tbsp', name: 'oyster sauce' }
    ],
    instructions: [
      'Heat oil in a wok and sauté garlic and onion.',
      'Add shrimp or chicken (if using) and cook until lightly browned.',
      'Stir in carrots, broccoli, cauliflower, and snow peas.',
      'Season with soy sauce and oyster sauce.',
      'Stir fry until vegetables are tender-crisp.',
      'Serve hot with rice.'
    ]
  },
  {
    id: '20',
    slug: 'ginisang-ampalaya',
    name: 'Ginisang Ampalaya',
    category: 'Vegan',
    image: 'vegan-ampalaya',
    description: 'Stir-fried bitter melon with egg, onion, and tomato.',
    prepTime: '15 minutes',
    cookTime: '20 minutes',
    servings: '3',
    ingredients: [
      { quantity: '2 medium', name: 'ampalaya (bitter melon), sliced' },
      { quantity: '2 pcs', name: 'eggs, beaten' },
      { quantity: '2 pcs', name: 'tomatoes, chopped' },
      { quantity: '1 small', name: 'onion, sliced' },
      { quantity: '2 cloves', name: 'garlic, minced' },
      { quantity: '1 tsp', name: 'salt' }
    ],
    instructions: [
      'Sauté garlic, onion, and tomatoes in a pan.',
      'Add ampalaya and stir fry for 3–5 minutes.',
      'Season with salt and cook until half tender.',
      'Pour in beaten eggs and stir until set.',
      'Serve hot with rice.'
    ]
  },
  {
    id: '34',
    slug: 'ginataang-sitaw',
    name: 'Ginataang Sitaw at Kalabasa',
    category: 'Vegan',
    image: 'ginataang-kalabasa',
    description: 'String beans and squash cooked in coconut milk - a healthy vegan dish.',
    prepTime: '15 minutes',
    cookTime: '25 minutes',
    servings: '4',
    ingredients: [
      { quantity: '2 cups', name: 'sitaw (string beans), cut into 2-inch pieces' },
      { quantity: '2 cups', name: 'kalabasa (squash), cubed' },
      { quantity: '2 cups', name: 'coconut milk' },
      { quantity: '1 cup', name: 'coconut cream' },
      { quantity: '3 cloves', name: 'garlic, minced' },
      { quantity: '1 pc', name: 'onion, sliced' },
      { quantity: '1 thumb', name: 'ginger, sliced' },
      { quantity: '2 pcs', name: 'green chili peppers' },
      { quantity: '2 tbsp', name: 'vegetable oil' },
      { quantity: '1 tsp', name: 'salt' },
      { quantity: '1/2 tsp', name: 'ground black pepper' }
    ],
    instructions: [
      'Heat oil in a pan and sauté garlic, onion, and ginger until fragrant.',
      'Add squash and cook for 5 minutes.',
      'Pour in coconut milk and bring to a gentle simmer.',
      'Add string beans and green chili peppers.',
      'Simmer for 10-15 minutes until vegetables are tender.',
      'Pour in coconut cream and season with salt and pepper.',
      'Cook for 2-3 more minutes until sauce thickens slightly.',
      'Serve hot with steamed rice.'
    ]
  },
  {
    id: '62',
    slug: 'adobong-kangkong',
    name: 'Adobong Kangkong',
    category: 'Vegan',
    image: 'adobong-kangkong',
    description: 'Water spinach cooked adobo-style with soy sauce and vinegar.',
    prepTime: '10 minutes',
    cookTime: '15 minutes',
    servings: '4',
    ingredients: [
      { quantity: '2 bunches', name: 'kangkong (water spinach), cleaned' },
      { quantity: '1/4 cup', name: 'soy sauce' },
      { quantity: '2 tbsp', name: 'vinegar' },
      { quantity: '4 cloves', name: 'garlic, minced' },
      { quantity: '1 pc', name: 'onion, sliced' },
      { quantity: '2 tbsp', name: 'cooking oil' }
    ],
    instructions: [
      'Heat oil and sauté garlic and onion.',
      'Add kangkong and stir-fry for 2 minutes.',
      'Pour soy sauce and vinegar.',
      'Cook until kangkong is tender but still crisp.',
      'Serve hot with rice.'
    ]
  },

  // ==================== DESSERTS RECIPES ====================
  {
    id: '21',
    slug: 'leche-flan',
    name: 'Leche Flan',
    category: 'Desserts',
    image: 'leche-flan',
    description: 'A rich and creamy caramel custard dessert.',
    prepTime: '20 minutes',
    cookTime: '45 minutes',
    servings: '6',
    ingredients: [
      { quantity: '10 pcs', name: 'egg yolks' },
      { quantity: '1 can', name: 'condensed milk' },
      { quantity: '1 can', name: 'evaporated milk' },
      { quantity: '1 cup', name: 'sugar (for caramel)' },
      { quantity: '1 tsp', name: 'vanilla extract' }
    ],
    instructions: [
      'Melt sugar in a pan until golden brown and pour into llaneras to form caramel.',
      'Mix egg yolks, condensed milk, evaporated milk, and vanilla extract.',
      'Strain mixture and pour into the llaneras.',
      'Steam for 30–45 minutes or until set.',
      'Cool before serving.'
    ]
  },
  {
    id: '22',
    slug: 'halo-halo',
    name: 'Halo-Halo',
    category: 'Desserts',
    image: 'halo-halo',
    description: 'A famous Filipino shaved ice dessert with mixed sweetened fruits and milk.',
    prepTime: '20 minutes',
    cookTime: '0 minutes',
    servings: '4',
    ingredients: [
      { quantity: '2 cups', name: 'shaved ice' },
      { quantity: '1/2 cup', name: 'sweetened banana' },
      { quantity: '1/2 cup', name: 'sweetened jackfruit' },
      { quantity: '1/2 cup', name: 'red mung beans' },
      { quantity: '1/2 cup', name: 'nata de coco' },
      { quantity: '1/2 cup', name: 'kaong (sugar palm fruit)' },
      { quantity: '1/2 cup', name: 'ube halaya (purple yam jam)' },
      { quantity: '1/2 cup', name: 'leche flan (topping)' },
      { quantity: '1 cup', name: 'evaporated milk' }
    ],
    instructions: [
      'In a tall glass, layer sweetened fruits, beans, and jellies.',
      'Fill the glass with shaved ice.',
      'Top with ube halaya and leche flan.',
      'Pour evaporated milk over the top.',
      'Serve immediately.'
    ]
  },
  {
    id: '23',
    slug: 'buko-pandan',
    name: 'Buko Pandan',
    category: 'Desserts',
    image: 'buko-pandan',
    description: 'A creamy dessert made with pandan-flavored gelatin, coconut, and cream.',
    prepTime: '30 minutes',
    cookTime: '10 minutes',
    servings: '6',
    ingredients: [
      { quantity: '2 cups', name: 'young coconut, shredded' },
      { quantity: '1 pack', name: 'pandan-flavored gelatin, cooked and cubed' },
      { quantity: '1 cup', name: 'nata de coco' },
      { quantity: '1 can', name: 'condensed milk' },
      { quantity: '1 pack', name: 'all-purpose cream' }
    ],
    instructions: [
      'Cook pandan-flavored gelatin according to package instructions and cut into cubes.',
      'In a bowl, combine gelatin, young coconut, and nata de coco.',
      'Add condensed milk and all-purpose cream. Mix well.',
      'Chill before serving.'
    ]
  },
  {
    id: '24',
    slug: 'maja-blanca',
    name: 'Maja Blanca',
    category: 'Desserts',
    image: 'maja-blanca',
    description: 'A coconut pudding dessert topped with toasted coconut or latik.',
    prepTime: '15 minutes',
    cookTime: '30 minutes',
    servings: '6',
    ingredients: [
      { quantity: '4 cups', name: 'coconut milk' },
      { quantity: '1 can', name: 'condensed milk' },
      { quantity: '1/2 cup', name: 'sugar' },
      { quantity: '1 cup', name: 'cornstarch, dissolved in water' },
      { quantity: '1/2 cup', name: 'toasted coconut or latik' }
    ],
    instructions: [
      'In a pot, combine coconut milk, condensed milk, and sugar. Bring to a boil.',
      'Slowly stir in cornstarch mixture while continuously stirring.',
      'Cook until thick and smooth.',
      'Pour into a greased tray and let it cool.',
      'Top with toasted coconut or latik before serving.'
    ]
  },
  {
    id: '31',
    slug: 'buko-pie',
    name: 'Buko Pie',
    category: 'Desserts',
    image: 'buko-pie',
    description: 'A Filipino coconut pie with tender young coconut meat in creamy filling.',
    prepTime: '45 minutes',
    cookTime: '50 minutes',
    servings: '8',
    ingredients: [
      { quantity: '3 cups', name: 'flour, sifted' },
      { quantity: '1 tsp', name: 'salt' },
      { quantity: '3/4 cup', name: 'lard, chilled' },
      { quantity: '6 tbsp', name: 'cold water' },
      { quantity: '2 tbsp', name: 'lemon juice' },
      { quantity: '1/3 cup', name: 'cornstarch' },
      { quantity: '1/2 cup', name: 'coconut water' },
      { quantity: '1/2 cup', name: 'all-purpose cream' },
      { quantity: '3/4 cup', name: 'sugar' },
      { quantity: '4 cups', name: 'young coconut meat' },
      { quantity: '1 pc', name: 'egg for wash' },
      { quantity: '1 tbsp', name: 'milk' }
    ],
    instructions: [
      'Make pie crust by cutting chilled lard into flour and salt mixture.',
      'Add cold water with lemon juice gradually to form dough. Chill.',
      'For filling: dissolve cornstarch in coconut water.',
      'Simmer cream and sugar until dissolved. Add coconut meat.',
      'Slowly add cornstarch mixture, cook until thickened. Cool completely.',
      'Roll out dough and line pie pan. Add filling.',
      'Cover with top crust, seal edges, and poke holes for vents.',
      'Bake at 425°F for 10 minutes, brush with egg wash.',
      'Reduce to 350°F and bake 30-40 minutes until golden.',
      'Cool before serving to let filling set.'
    ]
  },
  {
    id: '59',
    slug: 'taho',
    name: 'Taho',
    category: 'Desserts',
    image: 'taho',
    description: 'Filipino silken tofu dessert with brown sugar syrup and sago pearls.',
    prepTime: '20 minutes',
    cookTime: '30 minutes',
    servings: '6',
    ingredients: [
      { quantity: '2 cups', name: 'silken tofu' },
      { quantity: '1/2 cup', name: 'sago pearls, cooked' },
      { quantity: '1 cup', name: 'brown sugar' },
      { quantity: '1/2 cup', name: 'water' },
      { quantity: '1 tsp', name: 'vanilla extract' }
    ],
    instructions: [
      'Cook sago pearls until translucent. Set aside.',
      'Make syrup by boiling brown sugar and water until thick.',
      'Add vanilla to syrup.',
      'Layer silken tofu, sago pearls, and syrup in cups.',
      'Serve warm or chilled.'
    ]
  },

  // ==================== MERIENDA RECIPES ====================
  {
    id: '25',
    slug: 'pancit-bihon',
    name: 'Pancit Bihon',
    category: 'Merienda',
    image: 'pancit-bihon',
    description: 'A popular Filipino noodle dish stir-fried with vegetables, pork, and shrimp.',
    prepTime: '20 minutes',
    cookTime: '30 minutes',
    servings: '6',
    ingredients: [
      { quantity: '500 g', name: 'bihon (rice noodles)' },
      { quantity: '200 g', name: 'pork, sliced' },
      { quantity: '200 g', name: 'shrimp, peeled' },
      { quantity: '1 pc', name: 'carrot, julienned' },
      { quantity: '1/2 head', name: 'cabbage, shredded' },
      { quantity: '3 tbsp', name: 'soy sauce' },
      { quantity: '2 cups', name: 'chicken broth' }
    ],
    instructions: [
      'Soak bihon noodles in water until softened, then drain.',
      'Sauté garlic and onion in a wok.',
      'Add pork and shrimp, cook until lightly browned.',
      'Pour in chicken broth and soy sauce, then add bihon noodles.',
      'Stir in carrots and cabbage, cook until vegetables are tender.',
      'Serve hot with calamansi.'
    ]
  },
  {
    id: '26',
    slug: 'arroz-caldo',
    name: 'Arroz Caldo',
    category: 'Merienda',
    image: 'arroz-caldo',
    description: 'A warm rice porridge flavored with ginger and topped with egg and garlic.',
    prepTime: '10 minutes',
    cookTime: '45 minutes',
    servings: '5',
    ingredients: [
      { quantity: '1 cup', name: 'glutinous rice' },
      { quantity: '200 g', name: 'chicken, cut into small pieces' },
      { quantity: '1 thumb-sized', name: 'ginger, sliced' },
      { quantity: '6 cups', name: 'chicken broth' },
      { quantity: '2 cloves', name: 'garlic, minced' },
      { quantity: '2 pcs', name: 'hard-boiled eggs, halved' },
      { quantity: '1/4 cup', name: 'toasted garlic (for topping)' }
    ],
    instructions: [
      'Sauté garlic, onion, and ginger in a pot.',
      'Add chicken and cook until lightly browned.',
      'Pour in chicken broth and add rice. Simmer until rice is soft and porridge-like.',
      'Season with fish sauce and pepper.',
      'Top with hard-boiled eggs and toasted garlic before serving.'
    ]
  },
  {
    id: '27',
    slug: 'turon',
    name: 'Turon',
    category: 'Merienda',
    image: 'turon',
    description: 'Crispy fried banana rolls coated with caramelized sugar.',
    prepTime: '15 minutes',
    cookTime: '20 minutes',
    servings: '6',
    ingredients: [
      { quantity: '6 pcs', name: 'ripe saba bananas, sliced lengthwise' },
      { quantity: '1 cup', name: 'jackfruit strips' },
      { quantity: '6 pcs', name: 'lumpia wrappers' },
      { quantity: '1 cup', name: 'brown sugar' },
      { quantity: 'oil', name: 'for frying' }
    ],
    instructions: [
      'Place banana slices and jackfruit on a lumpia wrapper, then roll tightly.',
      'Heat oil in a pan, roll the turon in brown sugar before frying.',
      'Fry until golden brown and caramelized.',
      'Drain excess oil and serve hot.'
    ]
  },
  {
    id: '28',
    slug: 'bibingka',
    name: 'Bibingka',
    category: 'Merienda',
    image: 'bibingka',
    description: 'A soft rice cake traditionally cooked in banana leaves.',
    prepTime: '20 minutes',
    cookTime: '40 minutes',
    servings: '6',
    ingredients: [
      { quantity: '2 cups', name: 'rice flour' },
      { quantity: '1 cup', name: 'coconut milk' },
      { quantity: '1/2 cup', name: 'sugar' },
      { quantity: '2 pcs', name: 'eggs' },
      { quantity: '1 tbsp', name: 'baking powder' },
      { quantity: '2 tbsp', name: 'butter, melted' },
      { quantity: '1/2 cup', name: 'grated cheese' },
      { quantity: '2 tbsp', name: 'salted egg slices (optional)' }
    ],
    instructions: [
      'Preheat oven to 180°C (350°F). Line molds with banana leaves.',
      'In a bowl, combine rice flour, coconut milk, sugar, eggs, and baking powder.',
      'Pour batter into prepared molds and bake for 30–40 minutes.',
      'Brush with butter and top with grated cheese and salted egg slices.',
      'Serve warm.'
    ]
  },
  {
    id: '35',
    slug: 'empanada',
    name: 'Filipino Empanada',
    category: 'Merienda',
    image: 'empanada',
    description: 'Crispy fried pastry filled with seasoned ground meat and vegetables.',
    prepTime: '45 minutes',
    cookTime: '30 minutes',
    servings: '12',
    ingredients: [
      { quantity: '3 cups', name: 'all-purpose flour' },
      { quantity: '1 tsp', name: 'salt' },
      { quantity: '1/2 cup', name: 'lard or butter, cold' },
      { quantity: '1 pc', name: 'egg' },
      { quantity: '1/2 cup', name: 'cold water' },
      { quantity: '500 g', name: 'ground pork or beef' },
      { quantity: '2 pcs', name: 'potatoes, diced small' },
      { quantity: '1 pc', name: 'carrot, diced small' },
      { quantity: '1 pc', name: 'onion, minced' },
      { quantity: '3 cloves', name: 'garlic, minced' },
      { quantity: '2 tbsp', name: 'soy sauce' },
      { quantity: '1 tsp', name: 'ground black pepper' },
      { quantity: '2 cups', name: 'oil for frying' }
    ],
    instructions: [
      'Make dough by mixing flour and salt. Cut in cold lard until mixture resembles crumbs.',
      'Add egg and cold water gradually to form dough. Wrap and chill for 30 minutes.',
      'For filling: sauté garlic and onion until fragrant.',
      'Add ground meat and cook until browned.',
      'Add potatoes, carrots, soy sauce, and pepper. Cook until vegetables are tender.',
      'Let filling cool completely.',
      'Roll out dough and cut into circles. Place filling in center.',
      'Fold and seal edges with fork.',
      'Deep fry until golden brown and crispy.',
      'Serve hot with sweet and sour sauce.'
    ]
  },
  {
    id: '63',
    slug: 'puto',
    name: 'Puto',
    category: 'Merienda',
    image: 'puto',
    description: 'Steamed rice cake topped with cheese and salted egg.',
    prepTime: '15 minutes',
    cookTime: '20 minutes',
    servings: '12',
    ingredients: [
      { quantity: '2 cups', name: 'rice flour' },
      { quantity: '1 cup', name: 'sugar' },
      { quantity: '1 cup', name: 'coconut milk' },
      { quantity: '1 tbsp', name: 'baking powder' },
      { quantity: '1/2 cup', name: 'grated cheese' },
      { quantity: '2 pcs', name: 'salted eggs, sliced' }
    ],
    instructions: [
      'Mix rice flour, sugar, coconut milk, and baking powder.',
      'Pour batter into puto molds.',
      'Steam for 15-20 minutes.',
      'Top with cheese and salted egg slices.',
      'Serve warm.'
    ]
  }
];