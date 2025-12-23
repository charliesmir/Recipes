import { Ingredient, Unit } from "@/adapters/types";
import { useStore } from "@/adapters/zustand/store";
import theme from "@/assets/theme/theme";
import { Alert } from "@/components/molecules/alert";
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

  const [showAlert, setShowAlert] = useState(false);

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
  const [errorIngredientQuantityIds, setErrorIngredientQuantityIds] = useState<
    string[]
  >([]);

  type IngredientQuantity = {
    id: string;
    quantity: string;
  };

  const [ingredientQuantities, setIngredientQuantities] = useState<
    IngredientQuantity[]
  >(
    recipeIngredients.map((ingredient) => ({
      id: ingredient.id,
      quantity: ingredient.quantity === 0 ? "" : ingredient.quantity.toString(),
    })),
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
        value:
          ingredientQuantities.find(
            (ingredientQuantity) => ingredientQuantity.id === ingredient.id,
          )?.quantity || "",
        onChangeText: (text: string) => {
          setIngredientQuantities((prev) =>
            prev.map((item) =>
              item.id === ingredient.id ? { ...item, quantity: text } : item,
            ),
          );
        },
        isError: errorIngredientQuantityIds.includes(ingredient.id),
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
          setIngredientQuantities((prev) =>
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

  const newIngredientQuantity: IngredientQuantity = {
    id: newIngredient.id,
    quantity: newIngredient.quantity.toString(),
  };

  const handleAddNewIngredient = () => {
    setRecipeIngredients((ingredients) => [...ingredients, newIngredient]);
    setIngredientQuantities((ingredientQuantities) => [
      ...ingredientQuantities,
      newIngredientQuantity,
    ]);
  };

  const checkIngredients = (ingredients: Ingredient[]) => {
    return ingredients
      .filter((ingredient) => ingredient.name.trim() === "")
      .map((ingredient) => ingredient.id);
  };

  const isValidNumber = (quantity: string): boolean => {
    const value = quantity.trim();
    if (value === "") return true;
    return /^\d+([.,]\d+)?$/.test(value);
  };

  const checkQuantities = (ingredients: IngredientQuantity[]) => {
    return ingredients
      .filter((ingredient) => !isValidNumber(ingredient.quantity))
      .map((ingredient) => ingredient.id);
  };

  const handleSave = () => {
    const trimmedTitle = recipeTitle.trim();
    const trimmedInstructions = recipeInstructions.trim();
    const missingIngredientNameIds = checkIngredients(recipeIngredients);
    setErrorIngredientNameId(missingIngredientNameIds);
    const incorrectIngredientQuantitiesIds =
      checkQuantities(ingredientQuantities);
    setErrorIngredientQuantityIds(incorrectIngredientQuantitiesIds);

    if (
      missingIngredientNameIds.length > 0 ||
      incorrectIngredientQuantitiesIds.length > 0
    ) {
      setShowAlert(true);
      return;
    }

    const updatedIngredients = recipeIngredients.map((ingredient) => {
      const quantity =
        ingredientQuantities.find((item) => item.id === ingredient.id)
          ?.quantity ?? "";
      return {
        ...ingredient,
        quantity: StringToNumber(quantity),
      };
    });

    updateRecipe(recipe.id, {
      title: trimmedTitle,
      instructions: trimmedInstructions === "" ? null : trimmedInstructions,
      ingredients: updatedIngredients,
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
      {showAlert && (
        <View style={styles.alert}>
          <Alert
            title="Something went wrong..."
            text="Ingredient information is incorrect"
            button={{
              variant: "back",
              onPress: () => setShowAlert(false),
            }}
          />
        </View>
      )}
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
  alert: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000099",
    zIndex: 1,
  },
});
