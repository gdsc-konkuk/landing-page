import WordBundle from "./WordBundle";
import Popup from "./Popup";

export default function Apply() {
  return (
    <div className="flex flex-col items-center text-center mt-[256px]">
        <h1 className='text-black text-[64px] font-bold'>GDSC Konkuk 2기와 <WordBundle /> </h1>
        <div className='text-black text-3xl font-semibold mt-[40px] space-y-[8px]'>
            <p>GDSC와 함께 가치를 공유하고 성장하고 싶다면,</p>
            <p>2024.08.01.~2025.08.01</p>
        </div>
        <Popup />
    </div>
  );
}



