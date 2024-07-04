import { cn } from '@/lib/utils';
import Link from 'next/link';

interface ApplyButtonProps {
  className?: string;
}

export default function ApplyButton({ className }: ApplyButtonProps) {
  return (
    <Link
      href="https://naver.com"
      className={cn(
        'text-[#000] font-suite text-[28px] font-semibold w-[270px] h-[71px] rounded-[43px] bg-[#FBBC04] flex justify-center items-center px-[60px] py-[18px]',
        className,
      )}
    >
      지원하기
    </Link>
  );
}
