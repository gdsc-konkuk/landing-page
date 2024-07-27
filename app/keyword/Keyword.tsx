'use client';

import React, { useState } from 'react';
import Card from './Card';
import Dot from './Dot';

import keywordTogether from '../../public/images/keyword/keywordTogether.png'
import keywordSharing from '../../public/images/keyword/keywordSharing.png'
import keywordChallenge from '../../public/images/keyword/keywordChallenge.png'

interface CardData {
    subtitle: string;
    title: string;
    description: string;
    image: string;
}

const cards: CardData[] = [


  {
    image: keywordTogether,
    subtitle: "함께",
    title: "Together",
    description: "GDSC Konkuk에서는 혼자 얻을 수 없는 소중한 가치를 함께 창출할 수 있습니다.",
  },
  {
    image: keywordSharing,
    subtitle: "공유",
    title: "Sharing",
    description: "GDSC Konkuk은 공유를 통해 서로의 지식을 나누고 함께 성장하는 커뮤니티 입니다.",
  },
  {
    image: keywordChallenge,
    subtitle: "도전",
    title: "Challenge",
    description: "GDSC Konkuk에서 열정을 가지고 도전하며 발전할 수 있습니다.",
  }
];

const Keyword: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="h-screen w-screen flex justify-center bg-white-100">
      <div className="flex">
        <div className="">
          {cards.map((_, index) => (
            <Dot key={index} onHover={() => setActiveIndex(index)} />
          ))}
        </div>
        <Card card={cards[activeIndex]} />
      </div>
    </div>
  );
}

export default Keyword;
