import { View, StyleSheet, ScrollView } from "react-native";
import { ButtonSmall, ButtonSmallProps } from "../atoms/buttonSmall";
import { PageTitle, PageTitleProps } from "../atoms/pageTitle";
import {
  RecipeCardOutput,
  RecipeCardOutputProps,
} from "../molecules/recipeCardOutput";

export type FeedPageProps = {
  title: PageTitleProps;
  add: ButtonSmallProps;
  cards: RecipeCardOutputProps[];
};

export const FeedPage = ({ title, add, cards }: FeedPageProps) => (
  <ScrollView>
    <View style={styles.box}>
      <View style={styles.titleBox}>
        <PageTitle {...title} />
        <ButtonSmall {...add} />
      </View>
      <View style={styles.list}>
        {cards.map((card, index) => (
          <RecipeCardOutput key={index} {...card} />
        ))}
      </View>
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  box: {
    display: "flex",
    flexDirection: "column",
    width: 360,
    marginTop: 50,
    marginBottom: 100,
    alignSelf: "center",
    gap: 20,
  },
  titleBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: 20,
  },
});
