import type { Meta, StoryObj } from "@storybook/react";

import { IngredientSelect } from "./ingredientSelect";

const meta = {
  title: "Atoms/IngredientSelect",
  component: IngredientSelect,
} satisfies Meta<typeof IngredientSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Available: Story = {
  args: {
    title: "Ingregient 1 800g",
    isChecked: true,
    setChecked: () => {},
  },
};
export const NotAvailable: Story = {
  args: {
    title: "Ingregient 1 800g",
    isChecked: false,
    setChecked: () => {},
  },
};
