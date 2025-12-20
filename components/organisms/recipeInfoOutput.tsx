import { View, StyleSheet, Text } from "react-native";
import {
  IngredientList,
  IngredientListProps,
} from "../molecules/ingredientList";
import {
  InstructionsOutput,
  InstructionsOutputProps,
} from "../atoms/instructionsOutput";
import { ButtonLarge, ButtonLargeProps } from "../atoms/buttonLarge";
import theme from "@/assets/theme/theme";

export type RecipeInfoOutputProps = {
  ingredients: IngredientListProps;
  instructions: InstructionsOutputProps;
  button: ButtonLargeProps;
};

export const RecipeInfoOutput = ({
  ingredients,
  instructions,
  button,
}: RecipeInfoOutputProps) => (
  <View style={styles.box}>
    <View style={styles.title}>
      <Text style={styles.text}> Ingredients </Text>
      <ButtonLarge {...button} />
    </View>
    <IngredientList {...ingredients} />
    <Text style={styles.text}> Instructions </Text>
    <InstructionsOutput {...instructions} />
  </View>
);

const styles = StyleSheet.create({
  box: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 15,
    width: 360,
    padding: 20,
    borderRadius: 20,
    backgroundColor: theme.colors.white,
    shadowColor: "#000000",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 150,
    width: "100%",
  },
  text: {
    fontFamily: theme.fontFamily.main,
    fontSize: theme.fontSize.heading2,
    color: theme.colors.primary,
  },
});
