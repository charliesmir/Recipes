import {
  View,
  StyleSheet,
  ScrollView,
  RefreshControl,
  Dimensions,
} from "react-native";
import { PageTitle, PageTitleProps } from "../atoms/pageTitle";
import {
  WeekMenuButtons,
  WeekMenuButtonsProps,
} from "../molecules/weekMenuButtons";
import { RecipeCard, RecipeCardProps } from "../atoms/recipeCard";
import { Note } from "../atoms/note";
import theme from "@/assets/theme/theme";

export type MenuPageProps = {
  title: PageTitleProps;
  buttons: WeekMenuButtonsProps;
  cards: RecipeCardProps[];
  onCloseRequest?: () => void;
};

const screenHeight = Dimensions.get("window").height;

export const MenuPage = ({
  title,
  buttons,
  cards,
  onCloseRequest,
}: MenuPageProps) => (
  <View>
    <View style={styles.drawerBack} />
    <ScrollView
      style={styles.scrollBox}
      refreshControl={
        <RefreshControl
          refreshing={false}
          onRefresh={() => {
            onCloseRequest?.();
          }}
          progressViewOffset={-1000}
        />
      }
    >
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
  </View>
);

const styles = StyleSheet.create({
  drawerBack: {
    height: 200,
    width: "110%",
    top: 40,
    right: 20,
    backgroundColor: theme.colors.primaryMedium,
    transform: [{ rotate: "8deg" }],
  },
  scrollBox: {
    top: -110,
    minHeight: screenHeight,
    backgroundColor: theme.colors.primaryMedium,
  },
  box: {
    display: "flex",
    flexDirection: "column",
    gap: 35,
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
