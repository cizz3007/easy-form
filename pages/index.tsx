import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { Button, Icon, Input } from '@src/components';
import { useState } from 'react';

const { Close } = Icon;

const Home: NextPage = () => {
  const [active, setActive] = useState(false);
  return (
    <div className={styles.container}>
      <div>NEXON-UI 디자인 시스템 조성혁이 만든 FENDa</div>
      <p>일명 조팬다!</p>
      <Button size={'medium'} theme={'default'}>
        hi!!!
      </Button>
      <Icon size={'Large'} onClick={() => setActive(!active)} />
      <Close size={'Medium'} />
      <Input
        type={'text'}
        name={'sdfsdf'}
        title={'아이디'}
        description={'사용하실 이메일 형태로 입력 부탁'}
        required={true}
        placeholder={'test'}
      />
      {/*<Form*/}
      {/*  validationMode={'all'}*/}
      {/*  data={[*/}
      {/*    {*/}
      {/*      component: 'Input',*/}
      {/*      defaultValue: 'ahj',*/}
      {/*      required: true*/}
      {/*    }*/}
      {/*  ]}*/}
      {/*  onSubmit={(values) => {*/}
      {/*    console.log(values);*/}
      {/*  }}*/}
      {/*/>*/}
    </div>
  );
};

export default Home;
