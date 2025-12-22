import type { Meta, StoryObj } from "@storybook/react";

import { Alert } from "./alert";

const meta = {
  title: "Molecules/Alert",
  component: Alert,
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Something went wrong...",
    text: "Ingredient information is incorrect",
    button: {
      variant: "back",
    },
  },
};
