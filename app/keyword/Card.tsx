import React from 'react';
import Image from 'next/image';

interface CardProps {
  card: {
    subtitle: string;
    title: string;
    description: string;
    image: string;
  };
}

const Card: React.FC<CardProps> = ({ card }) => {
  return (
    <div className='flex items-center transition-opacity duration-500'>
      <div className='flex-col'>
        <div className="text-[#ea4335] text-[22px] font-semibold font-suite leading-9">{card.subtitle}</div>
        <h2 className="text-5xl font-bold mt-[12px] relative">{card.title}</h2>
        <div className='w-[306px] h-[120px] text-[#606060] text-[28px] font-normal font-suite leading-10 mt-[23.12px]'>{card.description}</div>
      </div>
      <Image src={card.image} alt={card.title} className="w-[714px] h-[574.12px] relative ml-[102px]" />
    </div>
  );
}

export default Card;
