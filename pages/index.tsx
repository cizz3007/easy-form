import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { Button } from '@src/components';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Button size={'medium'} theme={'default'}>
        hi!!!
      </Button>
    </div>
  );
};

export default Home;
