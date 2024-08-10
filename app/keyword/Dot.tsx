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
        className={`w-[25px] h-[25px] rounded-full ${smallCiclceColor} transition-colors duration-300`}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        style={{
          backgroundColor: `${smallCiclceColor.replace('700', '300')}`, // ex: red-700 -> red-300
        }}
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
