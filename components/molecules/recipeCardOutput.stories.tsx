import type { Meta, StoryObj } from "@storybook/react";

import { RecipeCardOutput } from "./recipeCardOutput";

const meta = {
  title: "Molecules/RecipeCardOutput",
  component: RecipeCardOutput,
} satisfies Meta<typeof RecipeCardOutput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Available: Story = {
  args: {
    back: {
      title: "Recipe Title",
      image: require("@/assets/images/RecipeImage1.png"),
    },
    card: {
      title: "Name of the recipe",
      isAvailable: false,
      isActive: false,
    },
  },
  render: (args) => {
    return <RecipeCardOutput {...args} onDrop={() => alert("Dropped")} />;
  },
};
