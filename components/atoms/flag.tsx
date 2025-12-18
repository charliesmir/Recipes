import { View, StyleSheet } from "react-native";
import Close from "../../assets/icons/close.svg";
import Bookmark from "../../assets/icons/bookmark_filled.svg";

type FlagProps = {
  size: "small" | "large";
};

const sizeVariation = {
  small: { boxHeight: 25, boxWidth: 16, icon: 10, top: 7, left: 3 },
  large: { boxHeight: 48, boxWidth: 48, icon: 24, top: 9, left: 12 },
} as const;

export const Flag = ({ size }: FlagProps) => {
  return (
    <View>
      <Bookmark
        width={sizeVariation[size].boxWidth}
        height={sizeVariation[size].boxHeight}
        style={styles.box}
      />
      <Close
        width={sizeVariation[size].icon}
        height={sizeVariation[size].icon}
        style={[
          styles.icon,
          { top: sizeVariation[size].top, left: sizeVariation[size].left },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginBottom: -8,
  },
  icon: {
    position: "absolute",
    zIndex: 1,
  },
});
