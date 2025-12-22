import type { Meta, StoryObj } from "@storybook/react";

import { Drawer } from "./drawer";

const meta = {
  title: "Atoms/Drawer",
  component: Drawer,
} satisfies Meta<typeof Drawer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "WEEK MENU",
  },
};
