import theme from "@/assets/theme/theme";
import { StyleSheet, Text, View } from "react-native";
import { ButtonSmall, ButtonSmallProps } from "../atoms/buttonSmall";

export type AlertProps = {
  title: string;
  text: string;
  button: ButtonSmallProps;
};

export const Alert = ({ title, text, button }: AlertProps) => (
  <View style={styles.box}>
    <Text style={styles.title}>{title}</Text>
    <View style={styles.bottomBox}>
      <Text style={styles.text}>{text}</Text>
      <ButtonSmall {...button} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  box: {
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 20,
    padding: 25,
    marginHorizontal: 50,
    alignSelf: "center",
    borderRadius: 20,
    backgroundColor: theme.colors.white,
  },
  title: {
    fontFamily: theme.fontFamily.main,
    fontSize: theme.fontSize.heading2,
    color: theme.colors.primaryDark,
  },
  bottomBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  text: {
    fontFamily: theme.fontFamily.main,
    fontSize: theme.fontSize.main,
    color: theme.colors.primaryDark,
  },
});
