import { View, StyleSheet } from "react-native";
import {
  IngredientOutput,
  IngredientOutputProps,
} from "../atoms/ingredientOutput";

export type IngredientListProps = {
  items: IngredientOutputProps[];
};

export const IngredientList = ({ items }: IngredientListProps) => (
  <View style={styles.box}>
    {items.map((item, index) => (
      <IngredientOutput key={index} {...item} />
    ))}
  </View>
);
const styles = StyleSheet.create({
  box: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    marginHorizontal: 25,
  },
});
