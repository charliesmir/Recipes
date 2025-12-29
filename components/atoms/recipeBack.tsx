import theme from "@/assets/theme/theme";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  ImageSourcePropType,
  Pressable,
} from "react-native";

export type RecipeBackProps = {
  image: ImageSourcePropType;
  title: string;
  onPress?: () => void;
};

export const RecipeBack = ({ image, title, onPress }: RecipeBackProps) => (
  <Pressable style={styles.box} onPress={onPress}>
    <Image source={image} style={styles.image} />
    <View style={styles.line} />
    <ImageBackground
      source={require("@/assets/images/cardBackground.png")}
      style={styles.rightBox}
    >
      <Text style={styles.text}>{title}</Text>
    </ImageBackground>
  </Pressable>
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
    shadowColor: "#000000",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
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
