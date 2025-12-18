import type { Meta, StoryObj } from "@storybook/react";

import { PageTitle } from "./pageTitle";

const meta = {
  title: "Atoms/Title",
  component: PageTitle,
} satisfies Meta<typeof PageTitle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const OnLight: Story = {
  args: {
    title: "ALL RECIPES",
    onLight: true,
  },
};
export const OnDark: Story = {
  args: {
    title: "WEEK MENU",
    onLight: false,
  },
};
