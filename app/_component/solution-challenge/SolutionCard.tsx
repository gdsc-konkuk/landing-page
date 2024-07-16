import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

interface SolutionCardProps {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
  className?: string;
}

export default function SolutionCard({
  title,
  description,
  imageSrc,
  link,
  className,
}: SolutionCardProps) {
  return (
    <div
      className={cn(
        'w-[1194px] h-[581px] bg-white rounded-[22px] flex gap-10 justify-center items-center shadow-xl absolute -translate-x-1/2',
        className,
      )}
    >
      <div className="flex flex-col">
        <h1 className="font-gangwon text-[48px] tracking-[1px]">{title}</h1>
        <div className="mt-[23px] font-suite text-[22px] text-[#606060]">
          {description.map((d, i) => (
            <p key={i}>{d}</p>
          ))}
        </div>
        <Link href={link}>
          <p className="mt-[66px] font-suite text-[20px]">{'-> '}자세히보기</p>
        </Link>
      </div>
      <div className="relative h-[442px] w-[715px]">
        <Image
          fill
          src={imageSrc}
          objectFit="cover"
          alt="pathpal"
          className="rounded-[24px] border-[2px] border-[#E4E4E4] object-cover"
        />
      </div>
    </div>
  );
}
