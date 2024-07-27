import React from 'react';

interface CardProps {
  card: {
    title: string;
    description: string;
    image: string;
  };
}

const Card: React.FC<CardProps> = ({ card }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg">
      <img src={card.image} alt={card.title} className="rounded-t-lg mb-4" />
      <h2 className="text-2xl font-bold mb-2">{card.title}</h2>
      <p>{card.description}</p>
    </div>
  );
}

export default Card;
