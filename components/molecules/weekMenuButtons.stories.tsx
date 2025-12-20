import type { Meta, StoryObj } from "@storybook/react";

import { WeekMenuButtons } from "./weekMenuButtons";

const meta = {
  title: "Molecules/WeekMenuButtons",
  component: WeekMenuButtons,
} satisfies Meta<typeof WeekMenuButtons>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SaveActive: Story = {
  args: {
    saveButton: {
      isActive: true,
      title: "Save changes",
      variant: "onDark",
      onPress: () => {},
    },
    clearButton: {
      title: "Clear",
      variant: "clear",
      isActive: true,
      onPress: () => {},
    },
  },
};

export const SaveNotActive: Story = {
  args: {
    saveButton: {
      isActive: false,
      title: "Save changes",
      variant: "onDark",
      onPress: () => {},
    },
    clearButton: {
      title: "Clear",
      variant: "clear",
      isActive: true,
      onPress: () => {},
    },
  },
};
