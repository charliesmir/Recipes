import type { Meta, StoryObj } from "@storybook/react";

import { ShoppingPageContent } from "./shoppingPageContent";

const meta = {
  title: "Molecules/ShoppingPageContent",
  component: ShoppingPageContent,
} satisfies Meta<typeof ShoppingPageContent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Short: Story = {
  args: {
    list: {
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
  },
};

export const Long: Story = {
  args: {
    list: {
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
  },
};
