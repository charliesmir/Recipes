import { View, StyleSheet, ScrollView } from "react-native";
import { ShoppingList, ShoppingListProps } from "../molecules/shoppingList";
import { Note } from "../atoms/note";

export type ShoppingPageContentProps = {
  list: ShoppingListProps;
};

export const ShoppingPageContent = ({ list }: ShoppingPageContentProps) => (
  <ScrollView>
    <View style={styles.box}>
      <ShoppingList {...list} />
      <View style={styles.note}>
        <Note
          text="Mark everything you may already have in the fridge before shopping"
          variant="shoppingList"
        />
      </View>
    </View>
  </ScrollView>
);
const styles = StyleSheet.create({
  box: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    minHeight: 450,
    width: 380,
  },
  note: {
    marginTop: 50,
  },
});
