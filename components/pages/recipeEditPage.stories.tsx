import type { Meta, StoryObj } from "@storybook/react";

import { RecipeEditPage } from "./recipeEditPage";

const meta = {
  title: "Pages/RecipeEditPage",
  component: RecipeEditPage,
} satisfies Meta<typeof RecipeEditPage>;

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
    input: {
      name: {
        value: "",
        onChangeText: () => {},
        image: require("@/assets/images/RecipeImage1.png"),
      },
      ingredients: [
        {
          name: {
            title: "Name",
            value: "",
            onChangeText: (text: string) => {},
            isError: false,
          },
          quantity: {
            title: "Quantity",
            value: "",
            onChangeText: (text: string) => {},
            isError: false,
          },
          unit: {
            onPress: () => {},
            onOptionPress: (option: string) => {},
            units: ["g", "kg", "ml", "l", "pcs"],
            isOpen: false,
          },
          button: {
            variant: "minus",
          },
        },
      ],
      instructions: {
        value: "",
        onChangeText: () => {},
      },
      button: {
        variant: "add",
      },
      saveButton: {
        title: "Save changes",
        variant: "onLight",
        isActive: true,
      },
    },
  },
};

export const Long: Story = {
  args: {
    exit: {
      variant: "back",
    },
    title: {
      title: "RECIPE",
      onLight: true,
    },
    input: {
      name: {
        value: "",
        onChangeText: () => {},
        image: require("@/assets/images/RecipeImage1.png"),
      },
      ingredients: [
        {
          name: {
            title: "Name",
            value: "",
            onChangeText: (text: string) => {},
            isError: false,
          },
          quantity: {
            title: "Quantity",
            value: "",
            onChangeText: (text: string) => {},
            isError: false,
          },
          unit: {
            onPress: () => {},
            onOptionPress: (option: string) => {},
            units: ["g", "kg", "ml", "l", "pcs"],
            isOpen: false,
          },
          button: {
            variant: "minus",
          },
        },
        {
          name: {
            title: "Name",
            value: "",
            onChangeText: (text: string) => {},
            isError: false,
          },
          quantity: {
            title: "Quantity",
            value: "",
            onChangeText: (text: string) => {},
            isError: false,
          },
          unit: {
            onPress: () => {},
            onOptionPress: (option: string) => {},
            units: ["g", "kg", "ml", "l", "pcs"],
            isOpen: false,
          },
          button: {
            variant: "minus",
          },
        },
        {
          name: {
            title: "Name",
            value: "",
            onChangeText: (text: string) => {},
            isError: false,
          },
          quantity: {
            title: "Quantity",
            value: "",
            onChangeText: (text: string) => {},
            isError: false,
          },
          unit: {
            onPress: () => {},
            onOptionPress: (option: string) => {},
            units: ["g", "kg", "ml", "l", "pcs"],
            isOpen: false,
          },
          button: {
            variant: "minus",
          },
        },
        {
          name: {
            title: "Name",
            value: "",
            onChangeText: (text: string) => {},
            isError: false,
          },
          quantity: {
            title: "Quantity",
            value: "",
            onChangeText: (text: string) => {},
            isError: false,
          },
          unit: {
            onPress: () => {},
            onOptionPress: (option: string) => {},
            units: ["g", "kg", "ml", "l", "pcs"],
            isOpen: false,
          },
          button: {
            variant: "minus",
          },
        },
      ],
      instructions: {
        value: "",
        onChangeText: () => {},
      },
      button: {
        variant: "add",
      },
      saveButton: {
        title: "Save changes",
        variant: "onLight",
        isActive: true,
      },
    },
  },
};
