import type { Meta, StoryObj } from "@storybook/react";

import { RecipeCard } from "./recipeCard";
import { useState } from "react";

const meta = {
  title: "Atoms/RecipeCard",
  component: RecipeCard,
} satisfies Meta<typeof RecipeCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Name of the recipe",
    isAvailable: true,
    isActive: false,
  },
};

export const Unavailable: Story = {
  args: {
    title: "Name of the recipe",
    isAvailable: false,
    isActive: false,
  },
};
export const Active: Story = {
  args: {
    title: "Name of the recipe",
    isAvailable: false,
    isActive: true,
    switchValue: false,
    toggleSwitch: () => {},
  },
  render: () => {
    const [enabled, setEnabled] = useState(false);

    return (
      <RecipeCard
        title="Name of the recipe"
        isAvailable={false}
        isActive={true}
        switchValue={enabled}
        toggleSwitch={setEnabled}
      />
    );
  },
};
