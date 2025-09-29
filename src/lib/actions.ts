'use server';

import { substituteIngredient } from '@/ai/flows/ingredient-substitution';
import type { SubstituteIngredientInput, SubstituteIngredientOutput } from '@/ai/flows/ingredient-substitution';

type State = {
  data: SubstituteIngredientOutput | null;
  error: string | null;
  loading: boolean;
};

export async function getSubstitutionSuggestion(
  prevState: State,
  formData: FormData
): Promise<State> {
  const recipeName = formData.get('recipeName') as string;
  const ingredient = formData.get('ingredient') as string;
  const dietaryRestriction = formData.get('dietaryRestriction') as string;
  const recipeIngredients = formData.get('recipeIngredients') as string;

  if (!recipeName || !ingredient || !dietaryRestriction || !recipeIngredients) {
    return { data: null, error: 'Missing required form fields.', loading: false };
  }

  const input: SubstituteIngredientInput = {
    recipeName,
    ingredient,
    dietaryRestriction,
    recipeIngredients,
  };

  try {
    const result = await substituteIngredient(input);
    return { data: result, error: null, loading: false };
  } catch (error) {
    console.error(error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    return { data: null, error: `Failed to get suggestion: ${errorMessage}`, loading: false };
  }
}
