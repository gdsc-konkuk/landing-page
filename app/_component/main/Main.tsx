import ApplyButton from '@/components/ui/ApplyButton';
import Logo from './Logo';
import LogoImage from '../../../public/images/main/main-logo.png';
import Image from 'next/image';

export default function Main() {
  return (
    <div className="text-nowrap h-screen w-screen flex justify-center items-center">
      <div className="flex flex-col md:flex-row md:w-[80%]">
        <Image
          src={LogoImage}
          alt="logo"
          width={575}
          height={295}
          className="md:hidden mb-[106px]"
          unoptimized
        />
        <div className="flex flex-col flex-1 px-[24px] md:px-0">
          <div>
            <div className="flex flex-col">
              <h1 className="text-[#000] text-[45px] md:text-[96px] font-bold leading-[55px] md:leading-[120px]">
                GDSC
              </h1>
              <h1 className="text-[#C7C7C7] text-[45px] md:text-[96px] font-bold leading-[55px] md:leading-[120px]">
                Konkuk univ.
              </h1>
            </div>
            <p className="mt-[17px] md:mt-[30px] text-[#3E3E3E] font-suite text-[16px] md:text-[32px] font-light leading-[19px] md:leading-10">
              Google Developer
              <br />
              Student club on Konkuk
            </p>
            <ApplyButton className="mt-[23px] md:mt-[56px] w-[128px] h-[37px]" />
          </div>
        </div>
        <div className="hidden flex-1 md:flex mt-[160px] ml-[50px]">
          <Logo />
        </div>
      </div>
    </div>
  );
}
