import React from 'react';

interface DotProps {
  onHover: () => void;
  onLeave: () => void;
  color: string;
}

const Dot: React.FC<DotProps> = ({ onHover, onLeave, color }) => {
  return (
    <div
      className={`w-4 h-4 ${color} rounded-full cursor-pointer`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    />
  );
}

export default Dot;
