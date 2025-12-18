import type { Meta, StoryObj } from "@storybook/react";

import { InputQuantity } from "./inputQuantity";
import { useState } from "react";

const meta = {
  title: "Atoms/InputQuantity",
  component: InputQuantity,
} satisfies Meta<typeof InputQuantity>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Quantity",
    value: "",
    onChangeText: () => {},
    isError: false,
  },
  render: () => {
    const [value, setValue] = useState("");

    return (
      <InputQuantity
        title="Quantity"
        value={value}
        onChangeText={setValue}
        isError={false}
      />
    );
  },
};

export const Error: Story = {
  args: {
    title: "Quantity",
    value: "",
    onChangeText: () => {},
    isError: true,
  },
  render: () => {
    const [value, setValue] = useState("");

    return (
      <InputQuantity
        title="Quantity"
        value={value}
        onChangeText={setValue}
        isError={true}
      />
    );
  },
};
