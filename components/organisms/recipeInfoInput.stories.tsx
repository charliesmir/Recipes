import type { Meta, StoryObj } from "@storybook/react";

import { RecipeInfoInput } from "./recipeInfoInput";
import { useState } from "react";

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
  render: (args) => {
    const [isOpen, setIsOpen] = useState(args.ingredients[0].unit.isOpen);
    const [selected, setSelected] = useState(args.ingredients[0].unit.units[0]);
    return (
      <RecipeInfoInput
        {...args}
        ingredients={[
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
              units: ["g", "kg", "ml", "l", "pcs"],
              isOpen: isOpen,
              selectedOption: selected,
              onPress: () => setIsOpen((prev) => !prev),
              onOptionPress: (unit) => {
                setSelected(unit);
                setIsOpen(false);
              },
            },
            button: {
              variant: "minus",
            },
          },
        ]}
      />
    );
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
