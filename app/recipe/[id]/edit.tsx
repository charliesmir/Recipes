import { Ingredient, Unit } from "@/adapters/types";
import { useStore } from "@/adapters/zustand/store";
import theme from "@/assets/theme/theme";
import { IngredientInputProps } from "@/components/molecules/ingredientInput";
import { RecipeEditPage } from "@/components/pages/recipeEditPage";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";

export default function EditScreen() {
  const { id } = useLocalSearchParams();
  const { recipes, updateRecipe } = useStore();
  const router = useRouter();

  const recipe = recipes.find((recipe) => recipe.id === id);

  if (!recipe) {
    return (
      <View style={styles.container}>
        <Text>Recipe not found</Text>
      </View>
    );
  }

  const handleBack = () => {
    router.replace(`/recipe/${id}`);
  };

  const [recipeTitle, setRecipeTitle] = useState(recipe.title);

  const [recipeInstructions, setRecipeInstructions] = useState(
    recipe.instructions ?? "",
  );

  const createLineNumbers = (text: string) => {
    const lines = text.split("\n");
    return lines
      .map((line, index) => {
        if (line.trim() === "") return "";
        return `${index + 1}. ${line}`;
      })
      .join("\n");
  };
  const numberedInstructions = createLineNumbers(recipeInstructions);
  const addLineNumbers = (text: string) => {
    return text
      .split("\n")
      .map((line) => line.replace(/^\s*\d+\.\s*/, ""))
      .join("\n");
  };
  const handleInstructionsInputChange = (text: string) => {
    const rawInstructions = addLineNumbers(text);
    setRecipeInstructions(rawInstructions);
  };

  const [recipeIngredients, setRecipeIngredients] = useState(
    recipe.ingredients,
  );

  // Needs refining
  const StringToNumber = (text: string) => {
    const normalizedText = text.trim().replace(",", "."); // needs to work with decimals
    if (normalizedText === "") return 0;
    const quantity = Number(normalizedText);
    return Number.isNaN(quantity) ? 0 : quantity;
  };

  const [openUnitId, setOpenUnitId] = useState<string | null>(null);
  const [errorIngredientNameId, setErrorIngredientNameId] = useState<string[]>(
    [],
  );

  const ingredientMap: IngredientInputProps[] = recipeIngredients.map(
    (ingredient) => ({
      name: {
        title: "Name",
        value: ingredient.name,
        onChangeText: (text: string) => {
          setRecipeIngredients((prev) =>
            prev.map((item) =>
              item.id === ingredient.id ? { ...item, name: text } : item,
            ),
          );
        },
        isError: errorIngredientNameId.includes(ingredient.id),
      },
      quantity: {
        title: "Quantity",
        value: ingredient.quantity === 0 ? "" : ingredient.quantity.toString(), // needs refining
        onChangeText: (text: string) => {
          setRecipeIngredients((prev) =>
            prev.map((item) =>
              item.id === ingredient.id
                ? { ...item, quantity: StringToNumber(text) }
                : item,
            ),
          );
        },
        isError: false,
      },
      unit: {
        selectedOption: ingredient.unit,
        onPress: () => {
          setOpenUnitId((prev) =>
            prev === ingredient.id ? null : ingredient.id,
          );
        },
        onOptionPress: (option: string) => {
          setRecipeIngredients((prev) =>
            prev.map((item) =>
              item.id === ingredient.id
                ? { ...item, unit: option as Unit }
                : item,
            ),
          );
          setOpenUnitId(null);
        },
        units: ["g", "kg", "ml", "l", "pcs"],
        isOpen: openUnitId === ingredient.id,
      },
      button: {
        variant: "minus",
        onPress: () => {
          setRecipeIngredients((prev) =>
            prev.filter((item) => item.id !== ingredient.id),
          );
        },
      },
    }),
  );

  const newIngredient: Ingredient = {
    id: `ingredient-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    name: "",
    quantity: 0,
    unit: "g",
  };

  const handleAddNewIngredient = () => {
    setRecipeIngredients((ingredients) => [...ingredients, newIngredient]);
  };

  const checkIngredients = (ingredients: Ingredient[]) => {
    return ingredients
      .filter((ingredient) => ingredient.name.trim() === "")
      .map((ingredient) => ingredient.id);
  };

  const handleSave = () => {
    const trimmedTitle = recipeTitle.trim();
    const trimmedInstructions = recipeInstructions.trim();
    const missingIngredientNameIds = checkIngredients(recipeIngredients);
    setErrorIngredientNameId(missingIngredientNameIds);

    if (missingIngredientNameIds.length > 0) {
      // Add modal
      return;
    }

    updateRecipe(recipe.id, {
      title: trimmedTitle,
      instructions: trimmedInstructions === "" ? null : trimmedInstructions,
      ingredients: recipeIngredients,
    });

    router.replace(`/recipe/${id}`);
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <RecipeEditPage
        exit={{
          variant: "back",
          onPress: handleBack,
        }}
        title={{
          title: "RECIPE",
          onLight: true,
        }}
        input={{
          name: {
            image: recipe.image,
            value: recipeTitle,
            onChangeText: setRecipeTitle,
          },
          ingredients: ingredientMap,
          instructions: {
            value: numberedInstructions,
            onChangeText: handleInstructionsInputChange,
          },
          button: {
            variant: "add",
            onPress: handleAddNewIngredient,
          },
          saveButton: {
            title: "Save changes",
            variant: "onLight",
            isActive: true,
            onPress: handleSave,
          },
        }}
      />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: theme.colors.background,
  },
});
