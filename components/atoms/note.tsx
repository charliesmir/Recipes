import { View, Text, StyleSheet } from "react-native";
import { Flag } from "./flag";
import Advise from "../../assets/icons/advise.svg";
import theme from "@/assets/theme/theme";

type NoteProps = {
  text: string;
  variant: "menu" | "shoppingList";
};

export const Note = ({ text, variant }: NoteProps) => {
  return (
    <View style={styles.box}>
      <Advise width={30} height={40} />
      <Text style={styles.text}>
        {text}
        {variant === "menu" && (
          <>
            {" "}
            <Flag size="small" />
          </>
        )}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    gap: 20,
    width: 350,
    height: 100,
    borderRadius: 20,
    paddingHorizontal: 50,
    backgroundColor: theme.colors.white,
    shadowColor: "#000000",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  text: {
    fontFamily: theme.fontFamily.main,
    fontSize: theme.fontSize.main,
    color: theme.colors.primaryMedium,
  },
});
