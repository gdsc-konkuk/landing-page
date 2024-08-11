"use client"; 

import React from 'react';
import SlidingCard from './SlidingCard';
import { useIsMobile } from '@/hooks/useIsMobile';

export default function Review({}){
  const isMobile =useIsMobile();
  if (isMobile) {
    // 모바일 화면용 레이아웃
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="w-[80%] text-center">
          <div>
            <div className="text-[#EA4335] text-[30px] font-normal font-gangwon">
              <span className='tracking-wide'>
                REVIE
              </span>
              <span className='tracking-wider'>
                W
              </span>
            </div>
            <div className="text-[#606060] text-[15px] mt-[16px] font-normal font-suite ">
              <p>
                GDSC Konkuk에서 경험할 수 있는 활동을 소개합니다!
              </p>
              <p>
                다양한 활동을 통해 함께 성장할 수 있어요.
              </p>
            </div>
            <div className='mt-[50px]'>
              <SlidingCard />
            </div>
          </div>
        </div>
      </div>
    );
  }


  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="w-[80%}] text-center"> {/* text-center 클래스를 추가하여 중앙 정렬 */}
        <div>
          <div>
            <div className="text-[#EA4335] text-[64px] font-normal font-gangwon">
                <span className='tracking-wide'>
                  REVIE
                </span>
                <span className='tracking-wider'>
                  W
                </span>

            </div>
            <div className="text-[#606060] text-[28px] mt-[16px] font-normal font-suite leading-10">
                <p>
                GDSC Konkuk에서 경험할 수 있는 활동을 소개합니다!
                </p>
                <p>
                다양한 활동을 통해 함께 성장할 수 있어요.
                </p>
            </div>
            <div className='mt-[135px]'>
                <SlidingCard/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
