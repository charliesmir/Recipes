import type { Meta, StoryObj } from "@storybook/react";

import { RecipeBack } from "./recipeBack";

const meta = {
  title: "Atoms/RecipeBack",
  component: RecipeBack,
} satisfies Meta<typeof RecipeBack>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Recipe Title",
    image: require("@/assets/images/RecipeImage1.png"),
  },
};
