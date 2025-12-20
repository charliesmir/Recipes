import theme from "@/assets/theme/theme";
import { Pressable, StyleSheet, Text } from "react-native";
import Clear from "../../assets/icons/clear.svg";
import Edit from "../../assets/icons/edit.svg";
import { ComponentType } from "react";

export type ButtonLargeProps = {
  title: string;
  variant: "clear" | "edit";
  isActive?: boolean;
  onPress?: () => void;
};

const iconMap: Record<
  ButtonLargeProps["variant"],
  ComponentType<{ width?: number; height?: number }>
> = {
  clear: Clear,
  edit: Edit,
};

const variants = {
  clear: {
    backgroundActive: theme.colors.white,
    backgroundInactive: theme.colors.primaryDark,
    text: theme.colors.primaryMedium,
  },
  edit: {
    backgroundActive: theme.colors.primary,
    backgroundInactive: theme.colors.disabledDark,
    text: theme.colors.white,
  },
} as const;

export const ButtonLarge = ({
  title,
  variant,
  onPress,
  isActive,
}: ButtonLargeProps) => {
  const Icon = iconMap[variant];
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
      <Icon width={24} height={24} />
      <Text style={[styles.title, { color: variants[variant].text }]}>
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  box: {
    height: 35,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 35,
    alignSelf: "flex-start",
  },
  title: {
    fontFamily: theme.fontFamily.main,
    fontSize: theme.fontSize.main,
  },
});
