import theme from "@/assets/theme/theme";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { color } from "storybook/internal/theming";

export type InputNameProps = {
  title: string;
  value: string;
  onChangeText: (text: string) => void;
  isError: boolean;
};

const ErrorIndicator = (isError: boolean) =>
  isError
    ? {
        borderColor: theme.colors.error,
        borderWidth: 2,
        color: theme.colors.error,
      }
    : {
        borderColor: theme.colors.primary,
        borderWidth: 1,
        color: theme.colors.primaryDark,
      };

export const InputName = ({
  title,
  value,
  onChangeText,
  isError,
}: InputNameProps) => (
  <View style={styles.box}>
    <Text style={[styles.title]}>{title}</Text>
    <TextInput
      style={[
        styles.input,
        {
          borderColor: ErrorIndicator(isError).borderColor,
          borderWidth: ErrorIndicator(isError).borderWidth,
          color: ErrorIndicator(isError).color,
        },
      ]}
      value={value}
      onChangeText={onChangeText}
    />
  </View>
);

const styles = StyleSheet.create({
  box: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
  input: {
    fontFamily: theme.fontFamily.main,
    fontSize: theme.fontSize.main,
    width: 320,
    height: 45,
    borderRadius: 45,
    paddingHorizontal: 15,
  },
  title: {
    fontFamily: theme.fontFamily.main,
    fontSize: theme.fontSize.main,
    marginBottom: 5,
    color: theme.colors.primary,
  },
});
