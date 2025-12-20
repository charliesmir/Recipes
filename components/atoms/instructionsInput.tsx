import theme from "@/assets/theme/theme";
import { StyleSheet, Text, TextInput, View } from "react-native";

export type InstructionsInputProps = {
  value: string;
  onChangeText: (text: string) => void;
};
export const InstructionsInput = ({
  value,
  onChangeText,
}: InstructionsInputProps) => (
  <View>
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      multiline
    />
  </View>
);

const styles = StyleSheet.create({
  input: {
    fontFamily: theme.fontFamily.main,
    fontSize: theme.fontSize.main,
    width: 320,
    minHeight: 100,
    borderRadius: 20,
    padding: 20,
    textAlign: "left",
    textAlignVertical: "top",
    borderColor: theme.colors.primary,
    borderWidth: 1,
    color: theme.colors.primaryDark,
  },
});
