import React from 'react';
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

interface IHomeProps {
  bgIndex: number;
}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  // todo: hook
  const { bgIndex } = props;
  const { src, blurSrc } = bgs[bgIndex];
  return (
    <Background src={src} blurSrc={blurSrc}>
      <Dialog
        title="Ahungrynoob"
        description="Alibaba Frontend Developer"
        avatar={{
          blurSrc: 'https://avatars1.githubusercontent.com/u/26563778?s=40&v=4',
          src: 'https://avatars1.githubusercontent.com/u/26563778?s=460&v=4',
        }}
        menu={[
          {
            name: 'Work',
            href: '/work',
          },
          {
            name: 'Thought',
            href: '/thought',
          },
          {
            name: 'Life',
            href: '/life',
          },
        ]}
        contact={[
          {
            icon: (
              <svg viewBox="0 0 1024 1024">
                <path d="M347.8 794.8c0 4-4.6 7.2-10.4 7.2-6.6 0.6-11.2-2.6-11.2-7.2 0-4 4.6-7.2 10.4-7.2 6-0.6 11.2 2.6 11.2 7.2z m-62.2-9c-1.4 4 2.6 8.6 8.6 9.8 5.2 2 11.2 0 12.4-4s-2.6-8.6-8.6-10.4c-5.2-1.4-11 0.6-12.4 4.6z m88.4-3.4c-5.8 1.4-9.8 5.2-9.2 9.8 0.6 4 5.8 6.6 11.8 5.2 5.8-1.4 9.8-5.2 9.2-9.2-0.6-3.8-6-6.4-11.8-5.8zM505.6 16C228.2 16 16 226.6 16 504c0 221.8 139.6 411.6 339 478.4 25.6 4.6 34.6-11.2 34.6-24.2 0-12.4-0.6-80.8-0.6-122.8 0 0-140 30-169.4-59.6 0 0-22.8-58.2-55.6-73.2 0 0-45.8-31.4 3.2-30.8 0 0 49.8 4 77.2 51.6 43.8 77.2 117.2 55 145.8 41.8 4.6-32 17.6-54.2 32-67.4-111.8-12.4-224.6-28.6-224.6-221 0-55 15.2-82.6 47.2-117.8-5.2-13-22.2-66.6 5.2-135.8 41.8-13 138 54 138 54 40-11.2 83-17 125.6-17s85.6 5.8 125.6 17c0 0 96.2-67.2 138-54 27.4 69.4 10.4 122.8 5.2 135.8 32 35.4 51.6 63 51.6 117.8 0 193-117.8 208.4-229.6 221 18.4 15.8 34 45.8 34 92.8 0 67.4-0.6 150.8-0.6 167.2 0 13 9.2 28.8 34.6 24.2C872.4 915.6 1008 725.8 1008 504 1008 226.6 783 16 505.6 16zM210.4 705.8c-2.6 2-2 6.6 1.4 10.4 3.2 3.2 7.8 4.6 10.4 2 2.6-2 2-6.6-1.4-10.4-3.2-3.2-7.8-4.6-10.4-2z m-21.6-16.2c-1.4 2.6 0.6 5.8 4.6 7.8 3.2 2 7.2 1.4 8.6-1.4 1.4-2.6-0.6-5.8-4.6-7.8-4-1.2-7.2-0.6-8.6 1.4z m64.8 71.2c-3.2 2.6-2 8.6 2.6 12.4 4.6 4.6 10.4 5.2 13 2 2.6-2.6 1.4-8.6-2.6-12.4-4.4-4.6-10.4-5.2-13-2z m-22.8-29.4c-3.2 2-3.2 7.2 0 11.8 3.2 4.6 8.6 6.6 11.2 4.6 3.2-2.6 3.2-7.8 0-12.4-2.8-4.6-8-6.6-11.2-4z" />
              </svg>
            ),
            href: 'https://github.com/ahungrynoob',
          },
          {
            icon: (
              <svg viewBox="0 0 1024 1024">
                <path d="M1004.6 381.6c7.8-6.2 19.4-0.4 19.4 9.4V800c0 53-43 96-96 96H96c-53 0-96-43-96-96V391.2c0-10 11.4-15.6 19.4-9.4 44.8 34.8 104.2 79 308.2 227.2 42.2 30.8 113.4 95.6 184.4 95.2 71.4 0.6 144-65.6 184.6-95.2 204-148.2 263.2-192.6 308-227.4zM512 640c46.4 0.8 113.2-58.4 146.8-82.8 265.4-192.6 285.6-209.4 346.8-257.4 11.6-9 18.4-23 18.4-37.8v-38c0-53-43-96-96-96H96C43 128 0 171 0 224v38c0 14.8 6.8 28.6 18.4 37.8 61.2 47.8 81.4 64.8 346.8 257.4 33.6 24.4 100.4 83.6 146.8 82.8z" />
              </svg>
            ),
            href: 'mailto:dxd_sjtu@outlook.com',
          },
          {
            icon: (
              <svg viewBox="0 0 1024 1024">
                <path d="M264.5 960H78.7V361.8h185.8V960zM171.5 280.2C112.1 280.2 63.9 231 63.9 171.6 63.9 112.2 112.1 64 171.5 64c59.4 0 107.6 48.2 107.6 107.6 0 59.4-48.2 108.6-107.6 108.6zM959.9 960h-185.4V668.8c0-69.4-1.4-158.4-96.6-158.4-96.6 0-111.4 75.4-111.4 153.4V960h-185.6V361.8h178.2v81.6h2.6c24.8-47 85.4-96.6 175.8-96.6 188 0 222.6 123.8 222.6 284.6V960z" />
              </svg>
            ),
            href:
              'https://www.linkedin.com/in/%E5%BE%90%E8%BE%BE-%E4%B8%81-842923156/',
          },
        ]}
      />
    </Background>
  );
};

export default Home;
