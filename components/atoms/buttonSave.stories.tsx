import type { Meta, StoryObj } from "@storybook/react";

import { ButtonSave } from "./buttonSave";

const meta = {
  title: "Atoms/ButtonSave",
  component: ButtonSave,
} satisfies Meta<typeof ButtonSave>;

export default meta;

type Story = StoryObj<typeof meta>;

export const OnLightActive: Story = {
  args: {
    variant: "onLight",
    title: "Save changes",
    isActive: true,
  },
};

export const OnLightInactive: Story = {
  args: {
    variant: "onLight",
    title: "Save changes",
    isActive: false,
  },
};

export const OnDarkActive: Story = {
  args: {
    variant: "onDark",
    title: "Save changes",
    isActive: true,
  },
};

export const OnDarkInactive: Story = {
  args: {
    variant: "onDark",
    title: "Save changes",
    isActive: false,
  },
};
