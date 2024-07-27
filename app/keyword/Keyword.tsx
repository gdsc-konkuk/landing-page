'use client';

import React, { useState } from 'react';
import Card from './Card';
import Dot from './Dot';

interface CardData {
    title: string;
    description: string;
    image: string;
}

const cards: CardData[] = [
  {
    title: "Challenge",
    description: "GDSC Konkuk에서 열정을 가지고 도전하며 발전할 수 있습니다.",
    image: "path/to/challenge-image.png",
  },
  {
    title: "Sharing",
    description: "GDSC Konkuk은 공유를 통해 서로의 지식을 나누고 함께 성장하는 커뮤니티 입니다.",
    image: "path/to/sharing-image.png",
  },
  {
    title: "Together",
    description: "GDSC Konkuk에서는 혼자 얻을 수 없는 소중한 가치를 함께 창출할 수 있습니다.",
    image: "path/to/together-image.png",
  }
];

const Keyword: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center">
        <div className="flex space-x-4 mb-8">
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
