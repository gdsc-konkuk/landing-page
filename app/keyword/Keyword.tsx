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
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
    const colors = ['bg-[#ea4335]', 'bg-[#33b540]', 'bg-[#fbbc04]'];
  
    return (
      <div className="h-screen w-screen flex justify-center">
        <div className="flex items-center">
          <div className="space-y-[40px] relative">
            {cards.map((_, index) => (
              <React.Fragment key={index}> 
                <Dot
                  key={index}
                  color={hoveredIndex === index ? colors[index] : 'bg-gray-400'}
                  onHover={() => {
                    setActiveIndex(index);
                    setHoveredIndex(index);
                  }}
                  onLeave={() => setHoveredIndex(null)}
                />
                {index < cards.length - 1 && (
                  <div className="h-[173px] w-[1px] bg-[#6C6C6C] mx-auto rounded-full"></div> 
                )}
              </React.Fragment>
            ))}
          </div>
          <div className='ml-[41px]'>
            <Card card={cards[activeIndex]} />
          </div>
        </div>
      </div>
    );
  }

export default Keyword;
