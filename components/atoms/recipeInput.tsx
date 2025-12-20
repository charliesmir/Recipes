import theme from "@/assets/theme/theme";
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from "react-native";

export type RecipeInputProps = {
  image: ImageSourcePropType;
  value: string;
  onChangeText: (text: string) => void;
};

export const RecipeInput = ({
  image,
  value,
  onChangeText,
}: RecipeInputProps) => (
  <View style={styles.box}>
    <Image source={image} style={styles.image} />
    <View style={styles.line} />
    <View style={styles.rightBox}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder="Recipe"
        multiline
        maxLength={30}
      />
    </View>
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

    backgroundColor: theme.colors.white,
    shadowColor: "#000000",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  input: {
    fontFamily: theme.fontFamily.main,
    fontSize: theme.fontSize.heading2,
    color: theme.colors.primary,
    height: 80,
    width: 165,
    lineHeight: 20,
    textAlignVertical: "top",
  },
});
