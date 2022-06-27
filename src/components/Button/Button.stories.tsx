import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = (args) => (
  <Button
    className={args.className}
    variant={args.variant}
    color={args.color}
    size={args.size}
    disabled={args.disabled}
    onClick={args.onClick}
  >
    {args.text}
  </Button>
);

export const ButtonStory = Template.bind({});
ButtonStory.storyName = 'Button';
ButtonStory.args = {
  className: '',
  variant: 'contained',
  color: 'primary',
  size: 'medium',
  disabled: false,
  text: 'Button',
};

export const ButtonVariationsStory = () => {
  return (
    <div className="card max-w-800 p-3">
      <h1 className="text-2xl font-medium mb-2">Buttons</h1>

      <h2 className="text-xl mt-6">Contained Buttons</h2>
      <div className="mt-1">
        <Button>Default</Button>
        <Button className="ml-2" color="primary">
          Primary
        </Button>
        <Button className="ml-2" color="secondary">
          Secondary
        </Button>
        <Button className="ml-2" disabled>
          Disabled
        </Button>
      </div>

      <h2 className="text-xl mt-6">Outlined Buttons</h2>
      <div className="mt-1">
        <Button variant="outlined">Default</Button>
        <Button className="ml-2" variant="outlined" color="primary">
          Primary
        </Button>
        <Button className="ml-2" variant="outlined" color="secondary">
          Secondary
        </Button>
        <Button className="ml-2" variant="outlined" disabled>
          Disabled
        </Button>
      </div>

      <h2 className="text-xl mt-6">Sizes</h2>
      <div className="mt-1">
        <Button variant="contained" color="primary" size="small">
          Small
        </Button>
        <Button
          className="ml-2"
          variant="contained"
          color="primary"
          size="medium"
        >
          Medium
        </Button>
        <Button
          className="ml-2"
          variant="contained"
          color="primary"
          size="large"
        >
          Large
        </Button>
      </div>
      <div className="mt-2">
        <Button variant="outlined" color="primary" size="small">
          Small
        </Button>
        <Button
          className="ml-2"
          variant="outlined"
          color="primary"
          size="medium"
        >
          Medium
        </Button>
        <Button
          className="ml-2"
          variant="outlined"
          color="primary"
          size="large"
        >
          Large
        </Button>
      </div>
    </div>
  );
};
ButtonVariationsStory.storyName = 'Button Variations';
