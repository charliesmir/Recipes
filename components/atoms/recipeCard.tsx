import theme from "@/assets/theme/theme";
import { View, Text, Switch, StyleSheet, Pressable } from "react-native";
import { Flag } from "./flag";

type BaseRecipeCardProps = {
  title: string;
  isAvailable: boolean;
};

type ActiveRecipeCardProps = {
  isActive: true;
  switchValue: boolean;
  toggleSwitch: (value: boolean) => void;
  onPress?: () => void;
};

type InactiveRecipeCardProps = {
  isActive?: false;
  switchValue?: never;
  toggleSwitch?: never;
  onPress?: never;
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
  onPress,
}: RecipeCardProps) => {
  return (
    <Pressable style={styles.box} onPress={onPress}>
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
    </Pressable>
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
