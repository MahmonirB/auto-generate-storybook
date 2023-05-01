
// stories.tsx
import React from 'react';
import { RadioButton, RadioButtonProps } from './RadioButton';
import { StoryFn } from '@storybook/react';

export default {
  title: 'RadioButton',
  component: RadioButton,
  argTypes: {
    changed: { control: 'text' },
    id: { control: 'text' },
    isSelected: { control: 'boolean' },
    label: { control: 'text' },
    value: { control: 'text' },
  },
};

const Template: StoryFn<RadioButtonProps> = (args: RadioButtonProps) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  changed: () => {},
  id: 'radio-1',
  isSelected: false,
  label: 'Radio Button',
  value: 'radio-button',
};