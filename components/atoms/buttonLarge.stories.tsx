import type { Meta, StoryObj } from "@storybook/react";

import { ButtonLarge } from "./buttonLarge";

const meta = {
  title: "Atoms/ButtonLarge",
  component: ButtonLarge,
} satisfies Meta<typeof ButtonLarge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ClearActive: Story = {
  args: {
    variant: "clear",
    title: "Clear",
    isActive: true,
  },
};

export const ClearInactive: Story = {
  args: {
    variant: "clear",
    title: "Clear",
    isActive: false,
  },
};

export const EditActive: Story = {
  args: {
    variant: "edit",
    title: "Edit",
    isActive: true,
  },
};

export const EditInactive: Story = {
  args: {
    variant: "edit",
    title: "Edit",
    isActive: false,
  },
};
