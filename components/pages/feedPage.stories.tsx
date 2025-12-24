import type { Meta, StoryObj } from "@storybook/react";

import { FeedPage } from "./feedPage";
import { RecipeCardOutputProps } from "../molecules/recipeCardOutput";

const meta = {
  title: "Pages/FeedPage",
  component: FeedPage,
} satisfies Meta<typeof FeedPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: {
      title: "ALL RECIPES",
      onLight: true,
    },
    add: {
      variant: "add",
    },
    cards: [
      {
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
      {
        back: {
          title: "Recipe Title",
          image: require("@/assets/images/RecipeImage1.png"),
        },
        card: {
          title: "Name of the recipe",
          isAvailable: false,
          isActive: true,
          switchValue: false,
          toggleSwitch: () => {},
        },
      },
      {
        back: {
          title: "Recipe Title",
          image: require("@/assets/images/RecipeImage1.png"),
        },
        card: {
          title: "Name of the recipe",
          isAvailable: true,
          isActive: true,
          switchValue: false,
          toggleSwitch: () => {},
        },
      },
      {
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
    ],
  },
};
