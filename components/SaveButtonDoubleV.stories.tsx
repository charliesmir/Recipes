import type { Meta, StoryObj } from '@storybook/react';

import { View } from 'react-native';
import { fn } from 'storybook/test';

import { SaveButton } from './SaveButtonDoubleV';

const meta = {
  title: 'Example/SaveButton',
  component: SaveButton,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, alignItems: 'flex-start' }}>
        <Story />
      </View>
    ),
  ],
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // Use `fn` to spy on the onPress arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: { onPress: fn() },
} satisfies Meta<typeof SaveButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const activeOnLight: Story = {
  args: {
    onLight: true,
    isActive: true,
    label: 'Save Changes',
  },
};

export const notActiveOnLight: Story = {
  args: {
    onLight: true,
    isActive: false,
    label: 'Save Changes',
  },
};

export const activeOnDark: Story = {
  args: {
    onLight: false,
    isActive: true,
    label: 'Save Changes',
  },
};

export const notActiveOnDark: Story = {
  args: {
    onLight: false,
    isActive: false,
    label: 'Save Changes',
  },
};



