import { useStore } from "@/adapters/zustand/store";
import { ButtonSmall } from "@/components/atoms/buttonSmall";
import { Button } from "@/components/Button";
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

  const numberedInstructions = recipe.instructions
    ? recipe.instructions
        .split("\n")
        .map((line, index) =>
          line.trim() === "" ? "" : `${index + 1}. ${line}`,
        )
        .join("\n")
    : "N/A";

  return (
    <View style={styles.container}>
      <Text>Details of recipe {id} </Text>
      <Text>Title: {recipe.title}</Text>
      <Text>Image: {recipe.image}</Text>
      <Text>
        Ingredients:{" "}
        {recipe.ingredients.map((ingredient) => ingredient.name).join(", ")}
      </Text>
      <Text>Instructions: {numberedInstructions}</Text>
      <Button
        label="Edit Recipe"
        onPress={() => router.push(`/recipe/${id}/edit`)}
      />
      <ButtonSmall variant={"delete"} onPress={handleDeleteRecipe} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
