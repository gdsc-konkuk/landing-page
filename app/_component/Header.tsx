import Image from 'next/image';

export default function Header() {
  return (
    <div className="w-full h-[66px] pl-[54px] pt-[19px] pb-[18px]">
      <div className="flex items-center">
        <Image
          src="/images/header/header-symbol.png"
          alt="header-symbol"
          width={45}
          height={21}
          className="w-[45px] h-[21px]"
        />
        <h1 className="font-google font-bold text-[23px] leading-normal ml-[12px] mr-[8px]">
          GDSC
        </h1>
        <span className="text-[16px] text-[#7C7C7C]">Konkuk Univ.</span>
      </div>
    </div>
  );
}
