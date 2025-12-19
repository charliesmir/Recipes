import theme from "@/assets/theme/theme";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  ImageSourcePropType,
} from "react-native";

export type RecipeBackProps = {
  image: ImageSourcePropType;
  title: string;
};

export const RecipeBack = ({ image, title }: RecipeBackProps) => (
  <View style={styles.box}>
    <Image source={image} style={styles.image} />
    <View style={styles.line} />
    <ImageBackground
      source={require("@/assets/images/cardBackground.png")}
      style={styles.rightBox}
    >
      <Text style={styles.text}>{title}</Text>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  box: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 110,
    height: 150,
    borderRadius: 20,
  },
  line: {
    width: 3,
    height: 116,
    marginHorizontal: -1.5,
  },
  rightBox: {
    width: 250,
    height: 150,
    borderRadius: 20,
    padding: 20,
    backgroundColor: theme.colors.disabled,
  },
  text: {
    fontFamily: theme.fontFamily.main,
    fontSize: theme.fontSize.heading2,
    color: theme.colors.disabledDark,
    lineHeight: 20,
  },
});
