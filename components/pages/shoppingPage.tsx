import { View, StyleSheet, ScrollView } from "react-native";
import { PageTitle, PageTitleProps } from "../atoms/pageTitle";
import {
  ShoppingPageContent,
  ShoppingPageContentProps,
} from "../molecules/shoppingPageContent";

export type ShoppingPageProps = {
  title: PageTitleProps;
  content: ShoppingPageContentProps;
};

export const ShoppingPage = ({ title, content }: ShoppingPageProps) => (
  <ScrollView>
    <View style={styles.box}>
      <View style={styles.topBox}>
        <PageTitle {...title} />
      </View>
      <View style={styles.content}>
        <ShoppingPageContent {...content} />
      </View>
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  box: {
    display: "flex",
    flexDirection: "column",
    gap: 35,
    width: 360,
    marginTop: 50,
    marginBottom: 100,
    alignSelf: "center",
  },
  topBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  content: { alignSelf: "center" },
});
