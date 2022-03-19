import React from 'react';
import {MoButton} from "../lib"

export default {
  title: 'Example/Button',
  component: MoButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <MoButton {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  primary: true,
  label: 'Button'
};
