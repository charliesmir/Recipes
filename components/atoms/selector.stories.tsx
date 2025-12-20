import type { Meta, StoryObj } from "@storybook/react";

import { UnitSelector } from "./selector";
import { useState } from "react";

const meta = {
  title: "Atoms/UnitSelector",
  component: UnitSelector,
} satisfies Meta<typeof UnitSelector>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    units: ["g", "kg", "ml", "l", "pcs"],
    selectedOption: "kg",
    isOpen: false,
    onPress: () => {},
    onOptionPress: () => {},
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    const [selected, setSelected] = useState(args.selectedOption);

    return (
      <UnitSelector
        {...args}
        isOpen={isOpen}
        selectedOption={selected}
        onPress={() => setIsOpen((prev) => !prev)}
        onOptionPress={(unit) => {
          setSelected(unit);
          setIsOpen(false);
        }}
      />
    );
  },
};
