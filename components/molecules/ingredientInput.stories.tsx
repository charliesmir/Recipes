import type { Meta, StoryObj } from "@storybook/react";

import { IngredientInput } from "./ingredientInput";
import { useState } from "react";

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
  render: (args) => {
    const [isOpen, setIsOpen] = useState(args.unit.isOpen);
    const [selected, setSelected] = useState(args.unit.units[0]);

    return (
      <IngredientInput
        {...args}
        unit={{
          units: ["g", "kg", "ml", "l", "pcs"],
          isOpen: isOpen,
          selectedOption: selected,
          onPress: () => setIsOpen((prev) => !prev),
          onOptionPress: (unit) => {
            setSelected(unit);
            setIsOpen(false);
          },
        }}
      />
    );
  },
};
