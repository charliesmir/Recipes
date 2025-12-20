import theme from "@/assets/theme/theme";
import { Pressable, StyleSheet } from "react-native";
import Back from "../../assets/icons/arrow_back.svg";
import Add from "../../assets/icons/add.svg";
import Minus from "../../assets/icons/minus.svg";
import Delete from "../../assets/icons/delete.svg";

export type ButtonSmallProps = {
  variant: "back" | "add" | "minus" | "delete";
  onPress?: () => void;
};

const iconMap: Record<
  ButtonSmallProps["variant"],
  React.ComponentType<{ width?: number; height?: number }>
> = {
  back: Back,
  add: Add,
  minus: Minus,
  delete: Delete,
};

export const ButtonSmall = ({ variant, onPress }: ButtonSmallProps) => {
  const Icon = iconMap[variant];
  return (
    <Pressable style={styles.box} onPress={onPress}>
      <Icon width={24} height={24} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.primary,
    borderRadius: 35,
  },
});
