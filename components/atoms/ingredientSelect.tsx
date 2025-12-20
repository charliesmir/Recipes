import theme from "@/assets/theme/theme";
import { StyleSheet, Text, View } from "react-native";
import { Checkbox } from "expo-checkbox";

export type IngredientSelectProps = {
  title: string;
  isChecked: boolean;
  setChecked: (value: boolean) => void;
};

export const IngredientSelect = ({
  title,
  isChecked,
  setChecked,
}: IngredientSelectProps) => (
  <View style={styles.box}>
    <Checkbox
      style={styles.checkbox}
      value={isChecked}
      onValueChange={setChecked}
      color={isChecked ? theme.colors.primary : undefined}
    />
    <Text style={styles.text}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  box: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  checkbox: {
    marginRight: 30,
    width: 22,
    height: 22,
    borderRadius: 2,
    borderColor: theme.colors.primary,
  },
  text: {
    fontFamily: theme.fontFamily.main,
    fontSize: theme.fontSize.main,
    color: theme.colors.primary,
  },
  textAvailable: {
    color: theme.colors.primary,
  },
  textNotAvailable: {
    color: theme.colors.primaryDark,
  },
});
