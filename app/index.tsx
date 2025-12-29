import { useStore } from "@/adapters/zustand/store";
import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
import { HomeBlock } from "@/components/pages/homeBlock";
import theme from "@/assets/theme/theme";
import { RecipeCardOutputProps } from "@/components/molecules/recipeCardOutput";
import { RecipeCardProps } from "@/components/atoms/recipeCard";
import { useMemo, useState } from "react";
import { IngredientSelectProps } from "@/components/atoms/ingredientSelect";

export default function HomeScreen() {
  const router = useRouter();
  const { recipes, addRecipe, updateRecipe, shoppingList } = useStore();

  const handleCreateRecipe = () => {
    const id = addRecipe();
    router.push({ pathname: "/recipe/[id]/edit", params: { id } });
  };

  const handleNavigateToRecipe = (id: string) => {
    router.push({ pathname: "/recipe/[id]", params: { id } });
  };

  const handleUpdateActiveRecipe = (id: string) => {
    updateRecipe(id, { isActive: true });
  };

  const handleClearMenu = () => {
    recipes.forEach((recipe) => updateRecipe(recipe.id, { isActive: false }));
  };

  const handleSaveMenuChanges = () => {
    menuRecipesChangedValuesIds.forEach((id) => {
      updateRecipe(id, { isActive: false });
    });
    setMenuRecipesChangedValuesIds([]);
  };

  const feedRecipes: RecipeCardOutputProps[] = useMemo(
    () =>
      recipes.map((recipe) => ({
        back: {
          image: recipe.image,
          title: recipe.title || "New Recipe",
          onPress: () => handleNavigateToRecipe(recipe.id),
        },
        card: recipe.isActive
          ? {
              title: recipe.title || "New Recipe",
              isAvailable: recipe.isAvailable,
              isActive: true,
              switchValue: false,
              toggleSwitch: () => {},
            }
          : {
              title: recipe.title || "New Recipe",
              isAvailable: recipe.isAvailable,
              isActive: false,
            },
        onDrop: () => handleUpdateActiveRecipe(recipe.id),
      })),
    [recipes],
  );

  const [menuRecipesChangedValuesIds, setMenuRecipesChangedValuesIds] =
    useState<string[]>([]);

  const toggleMenuRecipeSwitch = (id: string) => {
    setMenuRecipesChangedValuesIds((prev) =>
      prev.includes(id)
        ? prev.filter((existingId) => existingId !== id)
        : [...prev, id],
    );
  };

  const menuRecipes: RecipeCardProps[] = useMemo(
    () =>
      recipes
        .filter((recipe) => recipe.isActive)
        .map((recipe) => ({
          title: recipe.title || "New Recipe",
          isAvailable: recipe.isAvailable,
          isActive: true,
          switchValue: !menuRecipesChangedValuesIds.includes(recipe.id),
          toggleSwitch: () => toggleMenuRecipeSwitch(recipe.id),
          onPress: () => handleNavigateToRecipe(recipe.id),
        })),
    [recipes, menuRecipesChangedValuesIds],
  );

  const shoppingIngredients: IngredientSelectProps[] = useMemo(
    () =>
      shoppingList.map((shoppingItem) => ({
        title: `${shoppingItem.name}${
          shoppingItem.quantity > 0
            ? ` ${shoppingItem.quantity}${shoppingItem.unit}`
            : ""
        }`,
        isChecked: false,
        setChecked: () => null,
      })),
    [shoppingList],
  );

  return (
    <View style={styles.container}>
      {/* <Button label={"Storybook"} onPress={() => router.push("./storybook")} /> */}

      <HomeBlock
        feed={{
          title: {
            title: "ALL RECIPES",
            onLight: true,
          },
          add: {
            variant: "add",
            onPress: handleCreateRecipe,
          },
          cards: feedRecipes,
        }}
        shopping={{
          title: {
            title: "SHOPPING LIST",
            onLight: true,
          },
          content: {
            list: {
              items: shoppingIngredients,
            },
          },
        }}
        menu={{
          title: {
            title: "WEEK MENU",
            onLight: false,
          },
          buttons: {
            saveButton: {
              title: "Save Changes",
              variant: "onDark",
              isActive: menuRecipesChangedValuesIds.length > 0,
              onPress: handleSaveMenuChanges,
            },
            clearButton: {
              title: "Clear",
              variant: "clear",
              isActive: menuRecipes.length > 0,
              onPress: handleClearMenu,
            },
          },
          cards: menuRecipes,
        }}
      />
    </View>
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
