import type { Meta, StoryObj } from "@storybook/react";

import { RecipeInput } from "./recipeInput";
import { useState } from "react";

const meta = {
  title: "Atoms/RecipeInput",
  component: RecipeInput,
} satisfies Meta<typeof RecipeInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "",
    onChangeText: () => {},
    image: require("@/assets/images/RecipeImage1.png"),
  },
  render: (args) => {
    const [value, setValue] = useState("");

    return (
      <RecipeInput
        {...args}
        value={value}
        onChangeText={setValue}
        image={args.image}
      />
    );
  },
};
