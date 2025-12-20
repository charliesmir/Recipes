import { View, StyleSheet, Text } from "react-native";
import theme from "@/assets/theme/theme";
import { RecipeInput, RecipeInputProps } from "../atoms/recipeInput";
import { ButtonSave, ButtonSaveProps } from "../atoms/buttonSave";
import {
  IngredientInput,
  IngredientInputProps,
} from "../molecules/ingredientInput";
import {
  InstructionsInput,
  InstructionsInputProps,
} from "../atoms/instructionsInput";
import { ButtonSmall, ButtonSmallProps } from "../atoms/buttonSmall";

export type RecipeInfoInputProps = {
  name: RecipeInputProps;
  ingredients: IngredientInputProps;
  instructions: InstructionsInputProps;
  button: ButtonSmallProps;
  saveButton: ButtonSaveProps;
};

export const RecipeInfoInput = ({
  name,
  ingredients,
  instructions,
  button,
  saveButton,
}: RecipeInfoInputProps) => (
  <View style={styles.box}>
    <View style={styles.nameTag}>
      <RecipeInput {...name} />
    </View>
    <View style={styles.infoBox}>
      <View style={styles.title}>
        <Text style={styles.text}> Ingredients </Text>
        <ButtonSmall {...button} />
      </View>
      <IngredientInput {...ingredients} />
      <Text style={styles.text}> Instructions </Text>
      <InstructionsInput {...instructions} />
    </View>
    <View style={styles.save}>
      <ButtonSave {...saveButton} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  box: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    position: "relative",
    width: 360,
  },
  nameTag: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
  },
  infoBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 15,
    width: "100%",
    padding: 20,
    marginTop: 20,
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
  save: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
