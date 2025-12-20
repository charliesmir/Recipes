import { View, StyleSheet } from "react-native";
import { InputName, InputNameProps } from "../atoms/inputName";
import { InputQuantity, InputQuantityProps } from "../atoms/inputQuantity";
import { UnitSelector, UnitSelectorProps } from "../atoms/selector";
import { ButtonSmall, ButtonSmallProps } from "../atoms/buttonSmall";

export type IngredientInputProps = {
  name: InputNameProps;
  quantity: InputQuantityProps;
  unit: UnitSelectorProps;
  button: ButtonSmallProps;
};

export const IngredientInput = ({
  name,
  quantity,
  unit,
  button,
}: IngredientInputProps) => (
  <View style={styles.box}>
    <View style={styles.topBox}>
      <InputName {...name} />
    </View>
    <View style={styles.bottomBox}>
      <InputQuantity {...quantity} />
      <View style={styles.buttonBox}>
        <UnitSelector {...unit} />
        <ButtonSmall {...button} />
      </View>
    </View>
  </View>
);
const styles = StyleSheet.create({
  box: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 15,
  },
  topBox: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
  },
  bottomBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 20,
  },
  buttonBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 155,
  },
});
