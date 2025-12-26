import theme from "@/assets/theme/theme";
import { StyleSheet, Text, View } from "react-native";

export type DrawerProps = {
  title: string;
};

export const Drawer = ({ title }: DrawerProps) => (
  <View style={styles.box}>
    <View style={styles.card} />
    <View style={styles.background}>
      <Text style={styles.title}>{title}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  box: {
    alignSelf: "center",
    width: "100%",
  },
  card: {
    position: "absolute",
    top: -25,
    left: 120,
    width: 250,
    height: 100,
    borderRadius: 20,
    backgroundColor: theme.colors.white,
    transform: [{ rotate: "-3deg" }],
  },
  background: {
    position: "relative",
    shadowColor: "#000000",
    shadowOffset: { width: 3, height: -7 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 7,
    backgroundColor: theme.colors.primary,
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontFamily: theme.fontFamily.accent,
    fontSize: theme.fontSize.heading1,
    color: theme.colors.primaryDark,
    marginTop: 30,
    marginBottom: 80,
  },
});
