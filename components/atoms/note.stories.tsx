import type { Meta, StoryObj } from "@storybook/react";

import { Note } from "./note";

const meta = {
  title: "Atoms/Note",
  component: Note,
} satisfies Meta<typeof Note>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InMenu: Story = {
  args: {
    text: "If you don’t have enough ingredients for a recipe, it will be marked with",
    variant: "menu",
  },
};
export const InShoppingList: Story = {
  args: {
    text: "Mark everything you may already have in the fridge before shopping ",
    variant: "shoppingList",
  },
};
