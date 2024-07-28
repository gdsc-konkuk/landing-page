'use client'
import React, { useEffect, useRef, useState } from 'react';
import ApplyButton from '@/components/ui/ApplyButton';
import Image from 'next/image';
import pmCard from '../../../public/images/apply/pmCard.png';
import designerCard from '../../../public/images/apply/designerCard.png';
import developerCard from '../../../public/images/apply/developerCard.png';

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
      <div className="mb-12">
        <ApplyButton />
      </div>
      <div className="relative flex justify-center items-end w-full max-w-4xl">
        <div className={`transform transition-transform duration-700 ${animate ? 'translate-y-0' : 'translate-y-full'} mb-4`}>
          <Image src={pmCard} alt="PM Card" className="" />
        </div>
        <div className={`transform transition-transform duration-700 delay-200 ${animate ? 'translate-y-0' : 'translate-y-full'} ml-[157px]`}>
          <Image src={designerCard} alt="Designer Card" className="" />
        </div>
        <div className={`transform transition-transform duration-700 delay-400 ${animate ? 'translate-y-0' : 'translate-y-full'} ml-[204px]`}>
          <Image src={developerCard} alt="Developer Card" className="" />
        </div>
      </div>
    </div>
  );
}
