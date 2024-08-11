'use client'
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import applyCards from '../../../public/images/apply/applyCards.png';
import pmCard from '../../../public/images/apply/pmCard.png';
import designCard from '../../../public/images/apply/designCard.png';
import developerCard from '../../../public/images/apply/developerCard.png';
import ApplyButton from '@/components/ui/ApplyButton';
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
    <div className="flex flex-col items-center text-center mt-12" ref={popupRef}>
      <div className={`w-[1380px] h-[700px] overflow-hidden relative ${animate ? 'animate__animated animate__bounceInUp' : 'translate-y-[1000px]'}`}>
        <Image src={applyCards} alt="Apply Cards" className="w-full h-full" />
      </div>
    </div>
  );
}
