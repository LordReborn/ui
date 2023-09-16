import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../src';

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    icon_name: {
      control: { type: 'text' },
    },
    size: {
      control: { type: 'radio' },
      options: ['s', 'm', 'l'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    platter: {
      control: { type: 'boolean' },
    },
    rounded: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: (props) => <Button {...props} />,
  name: 'Button',
  args: {
    label: 'Click me',
    icon_name: 'Camera',
    size: 'm',
    platter: true,
    rounded: true,
  },
};
