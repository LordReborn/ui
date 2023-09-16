import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from '../../src';

const meta: Meta<typeof IconButton> = {
  component: IconButton,
  argTypes: {
    icon_name: {
      control: { type: 'text' },
    },
    height: {
      control: { type: 'radio' },
      options: ['xs', 's', 'm', 'l', 'xl'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    platter: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Primary: Story = {
  render: (props) => <IconButton {...props} />,
  name: 'IconButton',
  args: {
    icon_name: 'Camera',
    height: 'm',
    disabled: false,
    platter: true,
  },
};
