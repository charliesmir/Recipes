import theme from "@/assets/theme/theme";
import { Pressable, StyleSheet, Text } from "react-native";

export type ButtonSaveProps = {
  title: string;
  variant: "onLight" | "onDark";
  isActive?: boolean;
  onPress?: () => void;
};

const variants = {
  onLight: {
    backgroundActive: theme.colors.primary,
    backgroundInactive: theme.colors.disabledDark,
    text: theme.colors.white,
  },
  onDark: {
    backgroundActive: theme.colors.white,
    backgroundInactive: theme.colors.primaryDark,
    text: theme.colors.primaryMedium,
  },
} as const;

export const ButtonSave = ({
  title,
  variant,
  onPress,
  isActive,
}: ButtonSaveProps) => {
  return (
    <Pressable
      style={[
        styles.box,
        {
          backgroundColor: isActive
            ? variants[variant].backgroundActive
            : variants[variant].backgroundInactive,
        },
      ]}
      onPress={onPress}
    >
      <Text style={[styles.title, { color: variants[variant].text }]}>
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  box: {
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    borderRadius: 35,
    alignSelf: "flex-start",
  },
  title: {
    fontFamily: theme.fontFamily.main,
    fontSize: theme.fontSize.main,
  },
});
