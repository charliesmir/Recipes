import { View, StyleSheet } from "react-native";
import { RecipeBack, RecipeBackProps } from "../atoms/recipeBack";
import { RecipeCard, RecipeCardProps } from "../atoms/recipeCard";

export type RecipeCardOutputProps = {
  back: RecipeBackProps;
  card: RecipeCardProps;
};

export const RecipeCardOutput = ({ back, card }: RecipeCardOutputProps) => (
  <View style={styles.box}>
    <View style={styles.back}>
      <RecipeBack {...back} />
    </View>
    {card.isActive === false && (
      <View style={styles.card}>
        <RecipeCard {...card} />
      </View>
    )}
  </View>
);
const styles = StyleSheet.create({
  box: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    height: 150,
  },
  back: { position: "relative", top: 0, left: 0 },
  card: {
    position: "absolute",

    zIndex: 1,
  },
});
