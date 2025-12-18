import type { Meta, StoryObj } from "@storybook/react";

import { Flag } from "./flag";

const meta = {
  title: "Atoms/Flag",
  component: Flag,
} satisfies Meta<typeof Flag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: {
    size: "large",
  },
};

export const Small: Story = {
  args: {
    size: "small",
  },
};
