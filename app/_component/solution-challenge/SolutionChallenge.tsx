'use client';

import { useInView } from 'react-intersection-observer';
import SolutionCard from './SolutionCard';
import { useEffect, useState } from 'react';

const solutionData = [
  {
    title: 'PathPal',
    description: [
      'PathPal은 시각장애인의 안전하고',
      '독립적인 보행을 보장해, 그들의',
      '이동권과 사회적 편의를 제공합니다.',
    ],
    imageSrc: '/images/solution/pathpal.png',
    link: 'https://naver.com',
    className: 'z-50',
  },
  {
    title: 'Glow Alarm',
    description: [
      'Glow Alarm은 청각 장애인에게',
      '불리한 상황을 개선하고자',
      '개발된 시각 경보 시스템입니다.',
    ],
    imageSrc: '/images/solution/glowalarm.png',
    link: 'https://naver.com',
    className: 'z-40 translate-y-[57px]',
  },
];

export default function SolutionChallenge() {
  const [inViewRef, inView] = useInView({
    threshold: 0.1,
  });
  const [animation, setAnimation] = useState('');

  const handleAnimation = (inView: boolean) => {
    inView
      ? setAnimation('animate-blow-up')
      : setAnimation('animate-blow-down');
  };

  useEffect(() => {
    handleAnimation(inView);
  }, [inView]);

  return (
    <div className="flex h-[1080px] w-screen items-start justify-center bg-[#F3F5F7] relative">
      <div className="flex flex-col items-center">
        <h1 className="mt-[157px] font-gangwon text-[54px] tracking-[1px]">
          SOLUTION Challenge TOP 100
        </h1>
        <div className="mt-[70px]">
          <SolutionCard
            title={solutionData[0].title}
            description={solutionData[0].description}
            imageSrc={solutionData[0].imageSrc}
            link={solutionData[0].link}
            className={`${solutionData[0].className} ${animation}`}
          />
          <SolutionCard
            title={solutionData[1].title}
            description={solutionData[1].description}
            imageSrc={solutionData[1].imageSrc}
            link={solutionData[1].link}
            className={solutionData[1].className}
          />
        </div>
      </div>
      <div
        className="opacity-0 absolute bottom-0 w-[1px] h-[90px] bg-red-500"
        ref={inViewRef}
      ></div>
    </div>
  );
}
