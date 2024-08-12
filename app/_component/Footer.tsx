import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="h-full md:h-[196px] w-full px-[24px] md:px-[54px] md:pb-[76px] md:pt-[60px] py-[30px]">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <div className="flex flex-col md:flex-row gap-[13px] md:gap-[33px]">
          <div className="flex items-start gap-[9px]">
            <Image
              src="/images/header/header-symbol.png"
              alt="footer-symbol"
              width={40}
              height={19}
              className="h-[10px] md:h-[19px] w-[21px] md:w-[40px]"
            />
            <div className="flex flex-col">
              <h1 className="font-google text-[10px] md:text-[20px] leading-none text-[#656C73]">
                Google Developer Student Clubs
              </h1>
              <span className="font-google text-[8px] md:text-[16px] text-[#656C73]">
                Konkuk University
              </span>
            </div>
          </div>
          <div className="font-suite text-[8px] md:text-[14px] leading-[10px] md:leading-[18px] text-[#515151]">
            Designer : Yeowon Kim, Yeonsu Lee
            <br />
            Developer :{' '}
            <Link href="https://github.com/MinboyKim" target="_blank">
              Dongmin Kim
            </Link>
            ,{' '}
            <Link href="https://github.com/clicelee" target="_blank">
              Jimin Lee
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-[6px] md:gap-[15px] mt-[16px] md:mt-0">
          <Link href="https://www.instagram.com/gdsc.konkuk" target="_blank">
            <Image
              src="/images/footer/instagram.svg"
              alt="instagram"
              width={60}
              height={60}
              className="h-6 md:h-[60px] w-6 md:w-[60px]"
            />
          </Link>
          <Link href="https://github.com/gdsc-konkuk" target="_blank">
            <Image
              src="/images/footer/github.svg"
              alt="github"
              width={60}
              height={60}
              className="h-6 md:h-[60px] w-6 md:w-[60px]"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
