import ApplyButton from '@/components/ui/ApplyButton';
import Logo from './Logo';

export default function Main() {
  return (
    <div className="text-nowrap h-screen w-screen flex justify-center items-center">
      <div className="flex w-[80%]">
        <div className="flex flex-col flex-1 items-end">
          <div>
            <div className="flex flex-col">
              <h1 className="text-[#000] text-[96px] font-bold leading-[120px]">
                GDSC
              </h1>
              <h1 className="text-[#C7C7C7] text-[96px] font-bold leading-[120px]">
                Konkuk univ.
              </h1>
            </div>
            <p className="mt-[30px] text-[#3E3E3E] font-suite text-[32px] font-light leading-10">
              Google Developer
              <br />
              Student club on Konkuk
            </p>
            <ApplyButton className="mt-[56px]" />
          </div>
        </div>
        <div className="flex-1 flex mt-[160px] ml-[50px]">
          <Logo />
        </div>
      </div>
    </div>
  );
}
