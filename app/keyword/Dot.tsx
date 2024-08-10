import React from 'react';

interface DotProps {
  onHover: () => void;
  onLeave: () => void;
  smallCiclceColor: string;
  bigCircleColor: string; //when hover event occurs, each hover color changes
}

const Dot: React.FC<DotProps> = ({ onHover, onLeave, smallCiclceColor, bigCircleColor }) => {
  return (
    <div className="relative flex items-center justify-center">
      {/* 큰 원 (뒤쪽) */}
      <div
        className={`absolute w-[23px] h-[23px] rounded-full ${bigCircleColor} transition-colors duration-300`}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      />
    <div
      className={`w-[15px] h-[15px] ${smallCiclceColor} rounded-full cursor-pointer`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    />
    </div>
  );
}

export default Dot;
