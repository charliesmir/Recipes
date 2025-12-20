import theme from "@/assets/theme/theme";
import { StyleSheet, Text, View } from "react-native";

export type InstructionsOutputProps = {
  instructions: string;
};
export const InstructionsOutput = ({
  instructions,
}: InstructionsOutputProps) => (
  <View>
    <Text style={styles.text}>{instructions}</Text>
  </View>
);

const styles = StyleSheet.create({
  text: {
    fontFamily: theme.fontFamily.main,
    fontSize: theme.fontSize.main,
    width: 320,
    textAlign: "left",
    textAlignVertical: "top",
    color: theme.colors.primaryDark,
  },
});
