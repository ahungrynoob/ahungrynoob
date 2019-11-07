import React from 'react';
import config from '../config';
import Background from './background';
import Dialog from './dialog';
import bg0 from '../../app/public/img/bg-0.jpg';
import bg0Blur from '../../app/public/img/bg-0-blur.jpg';
import bg1 from '../../app/public/img/bg-1.jpg';
import bg1Blur from '../../app/public/img/bg-1-blur.jpg';
import bg2 from '../../app/public/img/bg-2.jpg';
import bg2Blur from '../../app/public/img/bg-2-blur.jpg';
import bg3 from '../../app/public/img/bg-3.jpg';
import bg3Blur from '../../app/public/img/bg-3-blur.jpg';

const bgs = [
  { src: bg0, blurSrc: bg0Blur },
  { src: bg1, blurSrc: bg1Blur },
  { src: bg2, blurSrc: bg2Blur },
  { src: bg3, blurSrc: bg3Blur },
];

export interface IHomeProps {
  bgIndex: number;
}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  const { bgIndex } = props;
  const { src, blurSrc } = bgs[bgIndex];
  const { user, menu } = config;
  return (
    <Background src={src} blurSrc={blurSrc}>
      <Dialog
        title="Ahungrynoob"
        description="Alibaba Frontend Developer"
        avatar={{
          blurSrc: `${user.avatar}?s=40&v=4`,
          src: `${user.avatar}?s=460&v=4`,
        }}
        menu={menu}
        contact={user.contact}
      />
    </Background>
  );
};

export default Home;
