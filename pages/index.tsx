import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { useState } from 'react';
import Calendar from '@src/components/calendar/Calendar';

const Home: NextPage = () => {
  const [selected, setSelected] = useState<string[]>(['2022-09-04', '2022-09-07']);
  return (
    <div className={styles.container}>
      <Calendar month={10} year={2022} selected={selected} onSelect={setSelected} />
    </div>
  );
};

export default Home;
