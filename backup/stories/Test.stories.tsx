import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Components/Test',
  component: () => <div>Test Component</div>,
};

export default meta;
type Story = StoryObj;

export const TestStory: Story = {
  render: () => <div style={{ padding: '20px', background: '#f0f0f0' }}>Hello Test</div>,
};