import React from 'react';

interface DotProps {
  onHover: () => void;
  onLeave: () => void;
  color: string;
}

const Dot: React.FC<DotProps> = ({ onHover, onLeave, color }) => {
  return (
    <div
      className={`w-[15px] h-[15px] ${color} rounded-full cursor-pointer`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    />
  );
}

export default Dot;
