import type { NextPage } from 'next';
import { useState } from 'react';
import Calendar from '@src/components/calendar/Calendar';

const Home: NextPage = () => {
  const [selected, setSelected] = useState<string[]>(['2022-09-04', '2022-10-07']);
  return (
    <div
      style={{
        display: 'flex'
      }}
    >
      <Calendar month={9} year={2021} selected={selected} onSelect={setSelected} />
      <Calendar month={9 + 1} year={2021} selected={selected} onSelect={setSelected} />
    </div>
  );
};

export default Home;
