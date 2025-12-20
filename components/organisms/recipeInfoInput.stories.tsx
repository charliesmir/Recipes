import type { Meta, StoryObj } from "@storybook/react";

import { RecipeInfoInput } from "./recipeInfoInput";

const meta = {
  title: "Organisms/RecipeInfoInput",
  component: RecipeInfoInput,
} satisfies Meta<typeof RecipeInfoInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
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
};

export const Long: Story = {
  args: {
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
};
