export interface Store {
recipes: Recipe[];
addRecipe: () => string;
deleteRecipe: (id: string) => void;
}

type Recipe = {
  id: string;
  title: string;
  ingredients: Ingredient[];
  instructions: string | null;
  isActive: boolean;
};

type Ingredient = {
  id: string;
  name: string;
  quantity: number;
  unit: Unit;
};

type Unit = "g" | "kg" | "ml" | "l" | "pcs";

