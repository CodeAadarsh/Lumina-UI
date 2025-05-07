import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Components/Test',
  component: () => <div>Test Component</div>,
};

export default meta;
type Story = StoryObj;

export const TestStory: Story = {
  render: () => <div className='border flex p-8'>Hello Test</div>,
};