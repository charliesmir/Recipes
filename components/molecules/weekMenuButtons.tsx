import { View, StyleSheet } from "react-native";
import { ButtonLarge, ButtonLargeProps } from "../atoms/buttonLarge";
import { ButtonSave, ButtonSaveProps } from "../atoms/buttonSave";

export type WeekMenuButtonsProps = {
  saveButton: ButtonSaveProps;
  clearButton: ButtonLargeProps;
};

export const WeekMenuButtons = ({
  saveButton,
  clearButton,
}: WeekMenuButtonsProps) => (
  <View style={styles.box}>
    <ButtonSave {...saveButton} />
    <ButtonLarge {...clearButton} />
  </View>
);
const styles = StyleSheet.create({
  box: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 15,
  },
});
