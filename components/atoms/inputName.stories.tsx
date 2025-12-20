import type { Meta, StoryObj } from "@storybook/react";

import { InputName } from "./inputName";
import { useState } from "react";

const meta = {
  title: "Atoms/InputName",
  component: InputName,
} satisfies Meta<typeof InputName>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Name",
    value: "",
    onChangeText: () => {},
    isError: false,
  },
  render: () => {
    const [value, setValue] = useState("");

    return (
      <InputName
        title="Name"
        value={value}
        onChangeText={setValue}
        isError={false}
      />
    );
  },
};

export const Error: Story = {
  args: {
    title: "Name",
    value: "",
    onChangeText: () => {},
    isError: true,
  },
  render: () => {
    const [value, setValue] = useState("");

    return (
      <InputName
        title="Name"
        value={value}
        onChangeText={setValue}
        isError={true}
      />
    );
  },
};
