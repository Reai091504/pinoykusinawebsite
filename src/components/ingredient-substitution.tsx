'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { getSubstitutionSuggestion } from '@/lib/actions';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Sparkles, Lightbulb, AlertTriangle, Loader2 } from 'lucide-react';
import type { Ingredient } from '@/lib/types';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

type IngredientSubstitutionProps = {
  recipeName: string;
  ingredients: Ingredient[];
  recipeIngredientsString: string;
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Getting Suggestion...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          Get AI Suggestion
        </>
      )}
    </Button>
  );
}

export default function IngredientSubstitution({
  recipeName,
  ingredients,
  recipeIngredientsString,
}: IngredientSubstitutionProps) {
  const initialState = { data: null, error: null, loading: false };
  const [state, formAction] = useFormState(getSubstitutionSuggestion, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: state.error,
      });
    }
  }, [state.error, toast]);


  return (
    <Card className="no-print">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="text-primary" />
          Ingredient Substitution
        </CardTitle>
        <CardDescription>
          Need to swap an ingredient? Let our AI chef help you find a substitute.
        </CardDescription>
      </CardHeader>
      <form action={formAction}>
        <input type="hidden" name="recipeName" value={recipeName} />
        <input type="hidden" name="recipeIngredients" value={recipeIngredientsString} />
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="ingredient">Ingredient to Substitute</Label>
            <Select name="ingredient" required>
              <SelectTrigger id="ingredient">
                <SelectValue placeholder="Select an ingredient" />
              </SelectTrigger>
              <SelectContent>
                {ingredients.map((ing) => (
                  <SelectItem key={ing.name} value={ing.name}>
                    {ing.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="dietaryRestriction">Reason for Substitution</Label>
            <Input
              id="dietaryRestriction"
              name="dietaryRestriction"
              placeholder="e.g., vegan, gluten-free, none in pantry"
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <SubmitButton />
        </CardFooter>
      </form>

      {state.data && (
        <div className="p-6 pt-0">
          <Alert variant={state.data.isSubstitutionReasonable ? 'default' : 'destructive'}>
            {state.data.isSubstitutionReasonable ? (
              <Lightbulb className="h-4 w-4" />
            ) : (
              <AlertTriangle className="h-4 w-4" />
            )}
            <AlertTitle>
              {state.data.isSubstitutionReasonable ? 'Substitution Suggestion' : 'Substitution Warning'}
            </AlertTitle>
            <AlertDescription>
              {state.data.substitutionSuggestion}
            </AlertDescription>
          </Alert>
        </div>
      )}
    </Card>
  );
}
