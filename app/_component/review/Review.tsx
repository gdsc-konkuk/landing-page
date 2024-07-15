import SlidingCard from './SlidingCard.tsx';



export default function Review() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="w-[80%] text-center"> {/* text-center 클래스를 추가하여 중앙 정렬 */}
        <div>
          <div>
            <h1 className="text-[#EA4335] text-[64px] font-bold leading-[120px]">
                REVIEW
            </h1>
            <div className="text-[#606060] text-[28px] mt-[16px]">
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
