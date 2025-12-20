import type { Meta, StoryObj } from "@storybook/react";

import { IngredientList } from "./ingredientList";

const meta = {
  title: "Molecules/IngredientList",
  component: IngredientList,
} satisfies Meta<typeof IngredientList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Available: Story = {
  args: {
    items: [
      {
        title: "Ingregient 1 800g",
        isAvailable: true,
      },
      {
        title: "Ingregient 2 200ml",
        isAvailable: false,
      },
      {
        title: "Ingregient 3 100g",
        isAvailable: true,
      },
      {
        title: "Ingregient 4 3pcs",
        isAvailable: true,
      },
      {
        title: "Ingregient 5 2kg",
        isAvailable: false,
      },
    ],
  },
};
