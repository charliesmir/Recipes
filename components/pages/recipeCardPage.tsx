import { View, StyleSheet, ScrollView } from "react-native";
import { ButtonSmall, ButtonSmallProps } from "../atoms/buttonSmall";
import { PageTitle, PageTitleProps } from "../atoms/pageTitle";
import {
  RecipeInfoOutput,
  RecipeInfoOutputProps,
} from "../organisms/recipeInfoOutput";
import {
  RecipeCardOutput,
  RecipeCardOutputProps,
} from "../molecules/recipeCardOutput";

export type RecipeCardPageProps = {
  exit: ButtonSmallProps;
  title: PageTitleProps;
  remove: ButtonSmallProps;
  card: RecipeCardOutputProps;
  content: RecipeInfoOutputProps;
};

export const RecipeCardPage = ({
  exit,
  title,
  content,
  card,
  remove,
}: RecipeCardPageProps) => (
  <ScrollView>
    <View style={styles.box}>
      <View style={styles.topBox}>
        <ButtonSmall {...exit} />
        <View style={styles.titleBox}>
          <PageTitle {...title} />
          <ButtonSmall {...remove} />
        </View>
      </View>
      <View style={styles.recipeInfo}>
        <View style={styles.card}>
          <RecipeCardOutput {...card} />
        </View>
        <View style={styles.content}>
          <RecipeInfoOutput {...content} />
        </View>
      </View>
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  box: {
    display: "flex",
    flexDirection: "column",
    width: 360,
    marginVertical: 50,
    alignSelf: "center",
  },
  topBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 30,
  },
  recipeInfo: { alignItems: "center", justifyContent: "center" },
  card: { position: "absolute", top: 0, right: 0, zIndex: 1 },
  content: {
    position: "relative",
    marginTop: 20,
  },
});
