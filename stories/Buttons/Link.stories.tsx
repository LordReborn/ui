import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Link } from '../../src';

const meta: Meta<typeof Link> = {
  component: Link,
  argTypes: {
    text: {
      control: { type: 'text' },
    },
    platter: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Link>;

export const Primary: Story = {
  render: (props) => <Link {...props} />,
  name: 'Link',
  args: {
    text: 'This is a link',
    platter: true,
    href: 'https://www.google.com/',
  },
};
