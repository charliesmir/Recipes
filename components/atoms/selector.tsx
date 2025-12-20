import {
  Pressable,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Arrow from "../../assets/icons/arrow_down.svg";
import theme from "@/assets/theme/theme";

export type UnitSelectorProps = {
  onPress: () => void;
  onOptionPress: (option: string) => void;
  units: string[];
  isOpen: boolean;
  selectedOption?: string;
};

export const UnitSelector = ({
  onPress,
  onOptionPress,
  units,
  isOpen,
  selectedOption,
}: UnitSelectorProps) => (
  <View style={styles.box}>
    <Pressable onPress={onPress} style={styles.boxClosed}>
      <Text style={styles.text}>{selectedOption}</Text>
      <Arrow width={24} height={24} rotation={isOpen ? 180 : 0} />
    </Pressable>
    {isOpen && (
      <View style={styles.boxOpen}>
        {units.map((unit, index) => (
          <TouchableOpacity key={index} onPress={() => onOptionPress(unit)}>
            <Text style={styles.text}>{unit}</Text>
          </TouchableOpacity>
        ))}
      </View>
    )}
  </View>
);

const styles = StyleSheet.create({
  box: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: theme.colors.primary,
    paddingRight: 20,
    paddingLeft: 25,
    paddingVertical: 10,
    alignItems: "stretch",
    justifyContent: "center",
    width: 85,
    minHeight: 45,
    backgroundColor: theme.colors.white,
  },
  text: {
    fontFamily: theme.fontFamily.main,
    fontSize: theme.fontSize.main,
    color: theme.colors.primaryDark,
  },
  boxClosed: {
    width: 45,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  boxOpen: {
    width: 45,
  },
});
