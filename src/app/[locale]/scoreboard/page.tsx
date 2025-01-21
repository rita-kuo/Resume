'use client';

import { BasePageProps } from '@/model/page';
import { PropsWithChildren, useEffect, useRef, useState } from 'react';

const Score = ({ children }: PropsWithChildren) => {
  const ref = useRef<HTMLDivElement>(null);
  ref.current?.addEventListener('resize', () => {
    console.log('resize', ref.current?.clientWidth, ref.current?.clientHeight);
  });

  return (
    <div
      ref={ref}
      className="flex h-full max-h-96 max-w-96 flex-shrink-0 basis-5/12 items-center justify-center rounded-3xl bg-white shadow-lg"
      style={{
        fontSize: `${Math.max(ref.current?.offsetHeight ?? 0, ref.current?.offsetWidth ?? 0) * 0.6}px`,
      }}
    >
      {children}
    </div>
  );
};

const Page = ({ params: { locale } }: BasePageProps) => {
  const [isHorizontal, setIsHorizontal] = useState(false);

  useEffect(() => {
    const onResize = () => {
      setIsHorizontal(window.innerWidth > window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, [setIsHorizontal]);

  return (
    <div className="h-screen w-screen bg-sky-100 p-10">
      <div
        className={`flex justify-center ${isHorizontal ? 'flex-row' : 'flex-col'}`}
      >
        <Score>11</Score>
        <div className="flex shrink-0 basis-1/12 items-center justify-center">
          <div
            className={`text-7xl font-bold ${isHorizontal ? '' : 'rotate-90'}`}
          >
            ：
          </div>
        </div>
        <Score>22</Score>
      </div>
    </div>
  );
};

export default Page;
