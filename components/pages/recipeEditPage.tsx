import { View, StyleSheet, ScrollView } from "react-native";
import { ButtonSmall, ButtonSmallProps } from "../atoms/buttonSmall";
import { PageTitle, PageTitleProps } from "../atoms/pageTitle";
import {
  RecipeInfoInput,
  RecipeInfoInputProps,
} from "../organisms/recipeInfoInput";

export type RecipeEditPageProps = {
  exit: ButtonSmallProps;
  title: PageTitleProps;
  input: RecipeInfoInputProps;
};

export const RecipeEditPage = ({ exit, title, input }: RecipeEditPageProps) => (
  <ScrollView>
    <View style={styles.box}>
      <View style={styles.topBox}>
        <ButtonSmall {...exit} />
        <View style={styles.titleBox}>
          <PageTitle {...title} />
        </View>
      </View>
      <View style={styles.recipeInfo}>
        <RecipeInfoInput {...input} />
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
});
