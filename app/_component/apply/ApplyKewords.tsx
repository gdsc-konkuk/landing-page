export default function ApplyKeywords() {
  return (
    <div className="relative h-[80px] w-[236px] overflow-hidden px-5 py-[6px] text-[50px] font-bold">
      <div className="absolute inset-0 flex h-full w-full animate-slide-4 items-center justify-center rounded-[24px] bg-[#4285F4]">
        도전하기
      </div>
      <div className="absolute inset-0 flex h-full w-full animate-slide-2 items-center justify-center rounded-[24px] bg-[#34A853]">
        함께하기
      </div>
      <div className="absolute inset-0 flex h-full w-full animate-slide-0 items-center justify-center rounded-[24px] bg-[#FBBC04]">
        성장하기
      </div>
    </div>
  );
}
