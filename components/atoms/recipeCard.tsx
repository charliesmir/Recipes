import theme from "@/assets/theme/theme";
import { View, Text, Switch, StyleSheet } from "react-native";
import { Flag } from "./flag";

type BaseRecipeCardProps = {
  title: string;
  isAvailable: boolean;
  onDrag?: () => void;
};

type ActiveRecipeCardProps = {
  isActive: true;
  switchValue: boolean;
  toggleSwitch: (value: boolean) => void;
};

type InactiveRecipeCardProps = {
  isActive?: false;
  switchValue?: never;
  toggleSwitch?: never;
};

export type RecipeCardProps = BaseRecipeCardProps &
  (ActiveRecipeCardProps | InactiveRecipeCardProps);

const Availability = (isAvailable: boolean) =>
  isAvailable
    ? {
        color: theme.colors.primary,
      }
    : {
        color: theme.colors.primaryDark,
      };

export const RecipeCard = ({
  toggleSwitch,
  switchValue,
  title,
  isAvailable,
  isActive,
  onDrag, // will be used in the future for dragging the card in the shopping list
}: RecipeCardProps) => {
  return (
    <View style={styles.box}>
      <Text style={[styles.title, { color: Availability(isAvailable).color }]}>
        {title}
      </Text>
      <View style={styles.flag}>
        {isAvailable === false && <Flag size="large" />}
      </View>
      <View style={styles.switch}>
        {isActive === true && (
          <Switch
            /*  switch should be changed */
            trackColor={{
              false: theme.colors.disabledDark,
              true: theme.colors.primary,
            }}
            thumbColor={theme.colors.white}
            ios_backgroundColor={theme.colors.disabledDark}
            onValueChange={toggleSwitch}
            value={switchValue}
          />
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  box: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "stretch",
    position: "relative",
    padding: 20,
    borderRadius: 20,
    height: 150,
    width: 250,
    backgroundColor: theme.colors.white,
    shadowColor: "#000000",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    fontFamily: theme.fontFamily.main,
    fontSize: theme.fontSize.heading2,
    height: 80,
    width: 165,
    lineHeight: 20,
  },
  flag: {
    position: "absolute",
    top: -9,
    right: 20,
  },
  switch: {
    alignSelf: "flex-end",
  },
});
