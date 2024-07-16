import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

interface SolutionCardProps {
  title: string;
  description: string[];
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
        'w-[1194px] h-[581px] bg-white rounded-[22px] flex gap-[70px] justify-center items-center shadow-xl absolute -translate-x-1/2',
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
        <p className="mt-[66px] font-suite text-[20px]">
          <Link href={link}>{'-> '}자세히보기</Link>
        </p>
      </div>
      <div className="relative h-[442px] w-[715px]">
        <Image
          fill
          src={imageSrc}
          alt="pathpal"
          className="rounded-[24px] border-[2px] border-[#E4E4E4] object-cover"
        />
      </div>
    </div>
  );
}
