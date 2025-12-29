import { ImageSourcePropType } from "react-native";

export interface Store {
  recipes: Recipe[];
  addRecipe: () => string;
  deleteRecipe: (id: string) => void;
  updateRecipe: (id: string, updatedFields: Partial<Recipe>) => void;
  shoppingList: ShoppingListItem[];
  updateShoppingList: (
    id: string,
    updatedFields: Partial<ShoppingListItem>,
  ) => void;
}

export type Recipe = {
  id: string;
  title: string;
  image: ImageSourcePropType;
  ingredients: Ingredient[];
  instructions: string | null;
  isAvailable: boolean;
  isActive: boolean;
};

export type Ingredient = {
  id: string;
  name: string;
  quantity: number;
  unit: Unit;
};

export type ShoppingListItem = {
  id: string;
  name: string;
  quantity: number;
  unit: Unit;
  isChecked: boolean;
};

export type Unit = "g" | "kg" | "ml" | "l" | "pcs";
