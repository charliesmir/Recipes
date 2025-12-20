import { View, StyleSheet } from "react-native";
import {
  IngredientSelectProps,
  IngredientSelect,
} from "../atoms/ingredientSelect";

export type ShoppingListProps = {
  items: IngredientSelectProps[];
};

export const ShoppingList = ({ items }: ShoppingListProps) => (
  <View style={styles.box}>
    {items.map((item, index) => (
      <IngredientSelect key={index} {...item} />
    ))}
  </View>
);
const styles = StyleSheet.create({
  box: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    marginHorizontal: 25,
  },
});
