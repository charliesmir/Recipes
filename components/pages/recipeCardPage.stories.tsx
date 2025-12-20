import type { Meta, StoryObj } from "@storybook/react";

import { RecipeCardPage } from "./recipeCardPage";

const meta = {
  title: "Pages/RecipeCardPage",
  component: RecipeCardPage,
} satisfies Meta<typeof RecipeCardPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    exit: {
      variant: "back",
    },
    title: {
      title: "RECIPE",
      onLight: true,
    },
    remove: {
      variant: "delete",
    },
    card: {
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
    content: {
      ingredients: {
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
      instructions: {
        instructions:
          "1.Heat oven and prepare pans: Position a rack in the middle of the oven. Preheat the oven to 350°F (180°C). Grease two 9-inch round cake pans, line the bottom with parchment paper, and then grease the top. Or grease and flour the bottom and sides of both pans.\n2. Prepare dry ingredients: Whisk flour, baking soda, salt, and cinnamon in a medium bowl until very well blended. \n3. Prepare wet ingredients: In a separate bowl, whisk the oil, granulated sugar, brown sugar, and vanilla. Add the eggs, one at a time, whisking after each one.",
      },
      button: {
        title: "Edit",
        variant: "edit",
        isActive: true,
      },
    },
  },
};
