'use client'
import { useEffect, useState } from 'react';
import Popup from "./Popup";
import ApplyKeywords from "./ApplyKewords";
import blueCharacter from '../../../public/images/apply/blueCharacter.png';
import Image from 'next/image';
import ApplyButton from '../../../components/ui/ApplyButton';

export default function Apply() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 847);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 847);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col items-center text-center mt-[100px]">
      <div className="relative flex flex-col items-center">
        <div className="w-[128px] absolute -top-[70px] left-1/2 transform -translate-x-1/2 " />
        <div className="flex flex-col items-center space-y-[11px]">
          <div className="text-black text-[24px] font-bold">GDSC Konkuk 2기와 </div>
          <ApplyKeywords isMobile={isMobile} />
        </div>
      </div>

      <Popup />
      <div className="text-black text-xl font-semibold mt-[20px] space-y-[8px]">
        <p>GDSC와 함께 가치를 공유하고 성장하고 싶다면,</p>
        <p>2024.08.01.~2025.08.01</p>
      </div>
      <div className="mt-[30px]">
        <ApplyButton />
        </div>

        
        <Popup />
        <div className="text-black text-xl font-semibold mt-[20px] space-y-[8px]">
          <p>GDSC와 함께 가치를 공유하고 성장하고 싶다면,</p>
          <p>2024.08.01.~2025.08.01</p>
        </div>
        <div className="mt-[30px]">
          <ApplyButton />
          </div>

      </div>
    );
  }
  return (
    <div className="flex flex-col items-center text-center mt-[256px]">
      <div className="relative flex flex-col items-center">
      <Image src={blueCharacter} alt="Blue Character" 
      className="w-[128px] absolute -top-[105px] left-1/2 transform translate-x-[150px] z-10"   />
      <div className="flex items-center space-x-[11px]">
        <div className=' text-black text-[64px] font-bold'>GDSC Konkuk 2기와 </div> 
        <div className="z-5"><ApplyKeywords /></div>
      </div>
    </div>
        <div className='text-black text-3xl font-semibold mt-[40px] space-y-[8px]'>
            <p>GDSC와 함께 가치를 공유하고 성장하고 싶다면,</p>
            <p>2024.08.01.~2025.08.01</p>
        </div>
        <div className="mt-[45px]">
          <ApplyButton />
        </div>
          <Popup />
    </div>
  );
}