import React from 'react';
import {Meta, Story} from '@storybook/react';
import HW12 from "../p2-homeworks/h12/HW12";
import {ReduxStoreProviderDecoration} from "../decorators/ReduxStoreProviderDecorator";

export default {
  title: 'HomeWork/HW13',
  components: HW12,
  decorators: [ReduxStoreProviderDecoration]
} as Meta



const Template: Story = () => {
  return <HW12 />
}

export const AppExample = Template.bind({})
