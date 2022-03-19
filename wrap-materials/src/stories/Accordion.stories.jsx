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
  content: "Accordion 1"
},
  {
    title: "b",
    content: "Accordion 2"
  },
  {
    title: "c",
    content: "Accordion 3"
  }
]

const Template = (args) => <MoAccordions {...args} >aa</MoAccordions>;

export const Overview = Template.bind({});
Overview.args = {
  data: accordionData,
  titleColor: "#fff",
  headerBgColor: "#66c6fc",
  expandedHeaderBgColor: "#96e3ff",
};
