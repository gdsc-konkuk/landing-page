'use client'
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import pmCard from '../../../public/images/apply/pmCard.png';
import designerCard from '../../../public/images/apply/designerCard.png';
import developerCard from '../../../public/images/apply/developerCard.png';
import 'animate.css'; //bounce animations library

export default function Popup() {
  const [animate, setAnimate] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setAnimate(true);
          } else {
            setAnimate(false);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (popupRef.current) {
      observer.observe(popupRef.current);
    }

    return () => {
      if (popupRef.current) {
        observer.unobserve(popupRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-center" ref={popupRef}>
      <div
        className={`w-[1380px] h-[700px] overflow-hidden relative ${animate ? 'animate__animated animate__bounceInUp' : 'translate-y-[1000px]'}`}
        style={{
          animationDuration: '1s', // 애니메이션 속도 설정
          animationTimingFunction: 'ease-in-out', // 애니메이션 속도 곡선 설정
          animationDelay: '0.1s', // 애니메이션 지연 시간 설정
        }}
      >
        <Image
          src={pmCard}
          alt="PM Card"
          className="absolute top-0 left-[5%] w-[360px] h-[439px]"
        />
        <Image
          src={designerCard}
          alt="Designer Card"
          className="absolute left-[15%] right-[30%] w-[429px] h-[470px] z-10"
        />
        <Image
          src={developerCard}
          alt="Developer Card"
          className="absolute top-0 right-0 w-[385px] h-[452px]"
        />
      </div>
    </div>
  );
}
