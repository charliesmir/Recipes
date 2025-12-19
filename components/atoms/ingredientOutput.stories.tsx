import type { Meta, StoryObj } from "@storybook/react";

import { IngredientOutput } from "./ingredientOutput";

const meta = {
  title: "Atoms/IngredientOutput",
  component: IngredientOutput,
} satisfies Meta<typeof IngredientOutput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Available: Story = {
  args: {
    title: "Ingregient 1 800g",
    isAvailable: true,
  },
};
export const NotAvailable: Story = {
  args: {
    title: "Ingregient 1 800g",
    isAvailable: false,
  },
};
