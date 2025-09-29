// Ingredient substitution tool
'use server';
/**
 * @fileOverview An ingredient substitution AI agent.
 *
 * - substituteIngredient - A function that suggests ingredient substitutions based on dietary restrictions or availability.
 * - SubstituteIngredientInput - The input type for the substituteIngredient function.
 * - SubstituteIngredientOutput - The return type for the substituteIngredient function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SubstituteIngredientInputSchema = z.object({
  recipeName: z.string().describe('The name of the recipe.'),
  ingredient: z.string().describe('The ingredient to be substituted.'),
  dietaryRestriction: z
    .string()
    .describe(
      'The dietary restriction or reason for the substitution (e.g., vegan, gluten-free, allergy, or unavailability).'
    ),
  recipeIngredients: z
    .string()
    .describe('The ingredients of the recipe for context.'),
});
export type SubstituteIngredientInput = z.infer<
  typeof SubstituteIngredientInputSchema
>;

const SubstituteIngredientOutputSchema = z.object({
  substitutionSuggestion: z
    .string()
    .describe(
      'A suggested substitution for the ingredient, considering the dietary restriction or reason. If no reasonable substitution can be made, explain why.'
    ),
  isSubstitutionReasonable: z
    .boolean()
    .describe(
      'Whether or not the model is confident that the substitution suggestion is reasonable.'
    ),
});
export type SubstituteIngredientOutput = z.infer<
  typeof SubstituteIngredientOutputSchema
>;

export async function substituteIngredient(
  input: SubstituteIngredientInput
): Promise<SubstituteIngredientOutput> {
  return substituteIngredientFlow(input);
}

const prompt = ai.definePrompt({
  name: 'substituteIngredientPrompt',
  input: {schema: SubstituteIngredientInputSchema},
  output: {schema: SubstituteIngredientOutputSchema},
  prompt: `You are a helpful assistant that helps users find ingredient substitutions in recipes. A user is trying to cook "{{recipeName}}" but wants to substitute "{{ingredient}}" because of "{{dietaryRestriction}}".

Here are the recipe's ingredients: "{{recipeIngredients}}".

Suggest a reasonable substitution, and provide a brief explanation of why it works. If no reasonable substitution can be made, explain why and set isSubstitutionReasonable to false.
`,
});

const substituteIngredientFlow = ai.defineFlow(
  {
    name: 'substituteIngredientFlow',
    inputSchema: SubstituteIngredientInputSchema,
    outputSchema: SubstituteIngredientOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
