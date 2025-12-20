import theme from "@/assets/theme/theme";
import { StyleSheet, Text, View } from "react-native";
import Unavailable from "@/assets/icons/unavailable.svg";

export type IngredientOutputProps = {
  title: string;
  isAvailable: boolean;
};

export const IngredientOutput = ({
  title,
  isAvailable,
}: IngredientOutputProps) => (
  <View style={styles.box}>
    {isAvailable === false && <Unavailable width={17} height={17} />}
    <Text
      style={[
        styles.text,
        isAvailable ? styles.textAvailable : styles.textNotAvailable,
      ]}
    >
      {title}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  box: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  text: {
    fontFamily: theme.fontFamily.main,
    fontSize: theme.fontSize.main,
    color: theme.colors.primary,
  },
  textAvailable: {
    color: theme.colors.primaryDark,
    marginLeft: 47,
  },
  textNotAvailable: {
    color: theme.colors.primary,
    marginLeft: 30,
  },
});
