import React from 'react';

interface DotProps {
  onHover: () => void;
}

const Dot: React.FC<DotProps> = ({ onHover }) => {
  return (
    <div
      className="w-4 h-4 bg-gray-400 rounded-full cursor-pointer"
      onMouseEnter={onHover}
    />
  );
}

export default Dot;
