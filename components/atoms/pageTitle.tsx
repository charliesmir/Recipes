import theme from "@/assets/theme/theme";
import { StyleSheet, Text, View } from "react-native";

export type PageTitleProps = {
  title: string;
  onLight: boolean;
};

export const PageTitle = ({ title, onLight }: PageTitleProps) => (
  <View style={styles.box}>
    <Text
      style={[styles.text, onLight ? styles.textOnLight : styles.textOnDark]}
    >
      {title}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  box: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: theme.fontFamily.accent,
    fontSize: theme.fontSize.heading1,
  },
  textOnLight: {
    color: theme.colors.primary,
  },
  textOnDark: {
    color: theme.colors.white,
  },
});
