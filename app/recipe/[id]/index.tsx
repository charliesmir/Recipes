import { useStore } from "@/adapters/zustand/store";
import { RecipeCardPage } from "@/components/pages/recipeCardPage";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function RecipeScreen() {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);
  const { id } = useLocalSearchParams();
  const { recipes, deleteRecipe } = useStore();
  const recipe = recipes.find((recipe) => recipe.id === id);

  if (isDeleting) {
    return (
      <View style={styles.container}>
        <Text>Deleting recipe...</Text>
      </View>
    );
  }

  if (!recipe) {
    return (
      <View style={styles.container}>
        <Text>Recipe not found</Text>
      </View>
    );
  }

  const handleDeleteRecipe = () => {
    setIsDeleting(true);
    deleteRecipe(recipe.id);
    router.replace("/");
  };

  const handleNavigateToHome = () => {
    router.replace("/");
  };

  const handleEditRecipe = () => {
    router.push(`/recipe/${id}/edit`);
  };

  const recipeTitle = recipe.title || "New Recipe";

  const numberedInstructions = recipe.instructions
    ? recipe.instructions
        .split("\n")
        .map((line, index) =>
          line.trim() === "" ? "" : `${index + 1}. ${line}`,
        )
        .join("\n")
    : "No instructions";

  const recipeIngredients =
    recipe.ingredients.length > 0
      ? recipe.ingredients.map((ingredient) => ({
          title: `${ingredient.name} ${ingredient.quantity}${ingredient.unit}`,
          isAvailable: false, // needs to be linked to checkboxes
        }))
      : [
          {
            title: "No ingredients",
            isAvailable: true,
          },
        ];

  return (
    <RecipeCardPage
      exit={{
        variant: "back",
        onPress: handleNavigateToHome,
      }}
      title={{
        title: "RECIPE",
        onLight: true,
      }}
      remove={{
        variant: "delete",
        onPress: handleDeleteRecipe,
      }}
      card={{
        back: {
          title: recipeTitle,
          image: require("@/assets/images/RecipeImage1.png"), // will be replaced by alternating images
        },
        card: {
          title: recipeTitle,
          isAvailable: recipe.isAvailable,
          isActive: false,
        },
      }}
      content={{
        ingredients: {
          items: recipeIngredients,
        },
        instructions: {
          instructions: numberedInstructions,
        },
        button: {
          title: "Edit",
          variant: "edit",
          isActive: true,
          onPress: handleEditRecipe,
        },
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
