import Popup from "./Popup";
import ApplyKeywords from "./ApplyKewords";
import blueCharacter from '../../../public/images/apply/blueCharacter.png';
import Image from 'next/image';

export default function Apply() {
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
        <Popup />
    </div>
  );
}