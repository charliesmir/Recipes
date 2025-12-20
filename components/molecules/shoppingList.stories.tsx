import type { Meta, StoryObj } from "@storybook/react";

import { ShoppingList } from "./shoppingList";

const meta = {
  title: "Molecules/ShoppingList",
  component: ShoppingList,
} satisfies Meta<typeof ShoppingList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Available: Story = {
  args: {
    items: [
      {
        title: "Ingregient 1 800g",
        isChecked: true,
        setChecked: () => {},
      },
      {
        title: "Ingregient 2 200ml",
        isChecked: false,
        setChecked: () => {},
      },
      {
        title: "Ingregient 3 100g",
        isChecked: true,
        setChecked: () => {},
      },
      {
        title: "Ingregient 4 3pcs",
        isChecked: true,
        setChecked: () => {},
      },
      {
        title: "Ingregient 5 2kg",
        isChecked: false,
        setChecked: () => {},
      },
    ],
  },
};
