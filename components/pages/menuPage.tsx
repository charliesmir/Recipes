import { View, StyleSheet, ScrollView } from "react-native";
import { PageTitle, PageTitleProps } from "../atoms/pageTitle";
import {
  WeekMenuButtons,
  WeekMenuButtonsProps,
} from "../molecules/weekMenuButtons";
import { RecipeCard, RecipeCardProps } from "../atoms/recipeCard";
import { Note } from "../atoms/note";

export type MenuPageProps = {
  title: PageTitleProps;
  buttons: WeekMenuButtonsProps;
  cards: RecipeCardProps[];
};

export const MenuPage = ({ title, buttons, cards }: MenuPageProps) => (
  <ScrollView>
    <View style={styles.box}>
      <View style={styles.topBox}>
        <PageTitle {...title} />
        <WeekMenuButtons {...buttons} />
      </View>
      <View style={styles.list}>
        {cards.map((card, index) => (
          <RecipeCard key={index} {...card} />
        ))}
      </View>
      <Note
        text="If you don’t have enough ingredients for a recipe, it will be marked with"
        variant="menu"
      />
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  box: {
    display: "flex",
    flexDirection: "column",
    gap: 35,
    width: 360,
    marginVertical: 50,
    alignSelf: "center",
  },
  topBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  list: {
    alignSelf: "center",
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
});
