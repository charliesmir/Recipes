import type { Meta, StoryObj } from "@storybook/react";

import { ButtonSmall } from "./buttonSmall";

const meta = {
  title: "Atoms/ButtonSmall",
  component: ButtonSmall,
} satisfies Meta<typeof ButtonSmall>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Back: Story = {
  args: {
    variant: "back",
  },
};
export const Add: Story = {
  args: {
    variant: "add",
  },
};

export const Minus: Story = {
  args: {
    variant: "minus",
  },
};
export const Delete: Story = {
  args: {
    variant: "delete",
  },
};
