import type { Meta, StoryObj } from "@storybook/react";

import { ShoppingPage } from "./shoppingPage";

const meta = {
  title: "Pages/ShoppingPage",
  component: ShoppingPage,
} satisfies Meta<typeof ShoppingPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: { title: "SHOPPING LIST", onLight: true },
    content: {
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
  },
};
