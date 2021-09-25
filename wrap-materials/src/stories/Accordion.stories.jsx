import React from 'react';
import {MoAccordions} from "../lib"

export default {
  title: 'Example/Accordions',
  component: MoAccordions,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const accordionData = [{
  title: "a",
  content: "as"
},
  {
    title: "b",
    content: "as"
  },
  {
    title: "c",
    content: "ass"
  }
]

const Template = (args) => <MoAccordions {...args} >aa</MoAccordions>;

export const Overview = Template.bind({});
Overview.args = {
  data: accordionData,
  headerBgColor: "#d85454",
  expandedHeaderBgColor: "#4ea8ff"
};
