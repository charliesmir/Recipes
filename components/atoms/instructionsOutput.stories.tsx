import type { Meta, StoryObj } from "@storybook/react";

import { InstructionsOutput } from "./instructionsOutput";

const meta = {
  title: "Atoms/InstructionsOutput",
  component: InstructionsOutput,
} satisfies Meta<typeof InstructionsOutput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Available: Story = {
  args: {
    instructions:
      "1.Heat oven and prepare pans: Position a rack in the middle of the oven. Preheat the oven to 350°F (180°C). Grease two 9-inch round cake pans, line the bottom with parchment paper, and then grease the top. Or grease and flour the bottom and sides of both pans.\n2. Prepare dry ingredients: Whisk flour, baking soda, salt, and cinnamon in a medium bowl until very well blended. \n3. Prepare wet ingredients: In a separate bowl, whisk the oil, granulated sugar, brown sugar, and vanilla. Add the eggs, one at a time, whisking after each one.",
  },
};
