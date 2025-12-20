import type { Meta, StoryObj } from "@storybook/react";

import { IngredientInput } from "./ingredientInput";

const meta = {
  title: "Molecules/IngredientInput",
  component: IngredientInput,
} satisfies Meta<typeof IngredientInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: {
      title: "Name",
      value: "",
      onChangeText: (text: string) => {},
      isError: false,
    },
    quantity: {
      title: "Quantity",
      value: "",
      onChangeText: (text: string) => {},
      isError: false,
    },
    unit: {
      onPress: () => {},
      onOptionPress: (option: string) => {},
      units: ["g", "kg", "ml", "l", "pcs"],
      isOpen: false,
    },
    button: {
      variant: "minus",
    },
  },
};
