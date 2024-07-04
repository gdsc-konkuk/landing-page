import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="h-[196px] w-full px-[54px] pb-[76px] pt-[60px]">
      <div className="flex items-center justify-between">
        <div className="flex gap-[33px]">
          <div className="flex items-start gap-[9px]">
            <Image
              src="/images/header/header-symbol.png"
              alt="footer-symbol"
              width={40}
              height={19}
              className="h-[19px] w-[40px]"
            />
            <div className="flex flex-col">
              <h1 className="font-google text-[20px] leading-none text-[#656C73]">
                Google Developer Student Clubs
              </h1>
              <span className="font-google text-[16px] text-[#656C73]">
                Konkuk University
              </span>
            </div>
          </div>
          <div className="font-suite font-[14px] leading-[18px] text-[#515151]">
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
        <div className="flex items-center gap-[15px]">
          <Link href="https://www.instagram.com" target="_blank">
            <Image
              src="/images/footer/instagram.svg"
              alt="instagram"
              width={60}
              height={60}
              className="h-[60px] w-[60px]"
            />
          </Link>
          <Link href="https://github.com" target="_blank">
            <Image
              src="/images/footer/github.svg"
              alt="github"
              width={60}
              height={60}
              className="h-[60px] w-[60px]"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
