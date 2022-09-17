import Calendar, { CalendarComponent } from '.';
import mdx from './';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { CalendarPayload } from '@components/Calendar/types/calendar.type';

export default {
  title: 'Components/Calendar',
  component: CalendarComponent,
  parameters: {
    docs: {
      page: mdx
    }
  },
  argTypes: {}
} as ComponentMeta<typeof Calendar.Default>;

const Template: ComponentStory<typeof Calendar.Default> = (args) => {
  const [selected, setSelected] = useState<CalendarPayload[]>([]);
  console.log('selected:', selected);
  return <Calendar {...args} onChange={setSelected} selected={selected} />;
};

export const Default = Template.bind({});
Default.args = {};
