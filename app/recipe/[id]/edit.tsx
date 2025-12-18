import { useStore } from "@/adapters/zustand/store";
import { Button } from "@/components/Button";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

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

  const handleSave = () => {
    const trimmedTitle = recipeTitle.trim();
    const trimmedInstructions = recipeInstructions.trim();

    updateRecipe(recipe.id, {
      title: trimmedTitle,
      instructions: trimmedInstructions === "" ? null : trimmedInstructions,
    });

    router.replace(`/recipe/${id}`);
  };

  return (
    <View style={styles.container}>
      <Text>Add or edit recipe {id}</Text>

      <TextInput
        placeholder="Title"
        value={recipeTitle}
        onChangeText={setRecipeTitle}
      />

      <TextInput
        multiline
        placeholder="Instructions"
        value={numberedInstructions}
        onChangeText={handleInstructionsInputChange}
      />

      <Button label="Save" onPress={handleSave} />
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
