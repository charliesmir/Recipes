import type { Meta, StoryObj } from "@storybook/react";

import { HomeBlock } from "./homeBlock";

const meta = {
  title: "Pages/HomeBlock",
  component: HomeBlock,
} satisfies Meta<typeof HomeBlock>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Short: Story = {
  args: {
    feed: {
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
    shopping: {
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
    menu: {
      title: {
        title: "WEEK MENU",
        onLight: false,
      },
      buttons: {
        saveButton: {
          isActive: false,
          title: "Save changes",
          variant: "onDark",
          onPress: () => {},
        },
        clearButton: {
          title: "Clear",
          variant: "clear",
          isActive: true,
          onPress: () => {},
        },
      },
      cards: [
        {
          title: "Name of the recipe",
          isAvailable: true,
          isActive: true,
          switchValue: true,
          toggleSwitch: () => {},
        },
        {
          title: "Name of the recipe",
          isAvailable: false,
          isActive: true,
          switchValue: true,
          toggleSwitch: () => {},
        },
        {
          title: "Name of the recipe",
          isAvailable: true,
          isActive: true,
          switchValue: true,
          toggleSwitch: () => {},
        },
        {
          title: "Name of the recipe",
          isAvailable: false,
          isActive: true,
          switchValue: true,
          toggleSwitch: () => {},
        },
        {
          title: "Name of the recipe",
          isAvailable: true,
          isActive: true,
          switchValue: true,
          toggleSwitch: () => {},
        },
        {
          title: "Name of the recipe",
          isAvailable: false,
          isActive: true,
          switchValue: true,
          toggleSwitch: () => {},
        },
        {
          title: "Name of the recipe",
          isAvailable: true,
          isActive: true,
          switchValue: true,
          toggleSwitch: () => {},
        },
      ],
    },
  },
};
