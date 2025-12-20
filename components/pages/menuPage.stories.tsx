import type { Meta, StoryObj } from "@storybook/react";

import { MenuPage } from "./menuPage";
import { RecipeCardProps } from "../atoms/recipeCard";

const meta = {
  title: "Pages/MenuPage",
  component: MenuPage,
} satisfies Meta<typeof MenuPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Short: Story = {
  args: {
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
    ],
  },
};

export const Long: Story = {
  args: {
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
};
