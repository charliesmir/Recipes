import type { Meta, StoryObj } from "@storybook/react";

import { InstructionsInput } from "./instructionsInput";
import { useState } from "react";

const meta = {
  title: "Atoms/InstructionsInput",
  component: InstructionsInput,
} satisfies Meta<typeof InstructionsInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "",
    onChangeText: () => {},
  },
  render: () => {
    const [value, setValue] = useState("");

    return <InstructionsInput value={value} onChangeText={setValue} />;
  },
};
