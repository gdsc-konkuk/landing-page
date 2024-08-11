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
      { threshold: 0.5 }
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
    <div className="flex items-center text-center mt-12" ref={popupRef}>
      <div className={`flex flex-row w-[1380px] h-[700px] overflow-hidden relative ${animate ? 'animate__animated animate__bounceInUp' : 'translate-y-[1000px]'}`}>
        <Image src={pmCard} alt="PM Card" className="w-[200.254px]"></Image>
        <Image src={designerCard} alt="Desiner Card" className="w-[394.254px] "></Image>
        <Image src={developerCard} alt="Developer Card" className="w-[394.254px] "></Image>
      </div>
    </div>
  );
}
