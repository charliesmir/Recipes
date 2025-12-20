import { useStore } from "@/adapters/zustand/store";
import { Link, useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "../components/Button";

export default function HomeScreen() {
  const router = useRouter();
  const { recipes, addRecipe } = useStore();
  const createRecipe = () => {
    const id = addRecipe();
    router.push({ pathname: "/recipe/[id]/edit", params: { id } });
  };

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      {/* <Link href="/recipe/[id]/edit">Add recipe</Link> */}
      <Button label={"Add recipe"} onPress={createRecipe} />
      {recipes.map((recipe) => (
        <Link
          key={recipe.id}
          href={{ pathname: "/recipe/[id]", params: { id: recipe.id } }}
        >
          <Text>{`${recipe.title || "New Recipe"}`}</Text>
        </Link>
      ))}
      <Link href="./storybook">storybook</Link>
      <Button label={"test"} />
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
