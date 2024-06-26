'use client';

import Header from '@/component/layout/Header';
import Information from '@/component/Information';
import MenuContent from '@/component/layout/MenuContent';
import React, { PropsWithChildren } from 'react';
import { useTranslations } from 'next-intl';
import { usePathname } from '@/navigation';

const Layout: React.FC<PropsWithChildren> = (props) => {
  const pathname = usePathname();
  const t = useTranslations('Title');
  return (
    <>
      <Header />
      <div className="md:hidden">
        <Information />
      </div>
      <div className="mx-auto w-full max-w-limit items-start gap-10 px-4 md:flex">
        <aside className="sticky top-17 hidden min-h-max basis-1/5 md:block [&>*+*]:border-t [&>*]:px-4 [&>*]:py-6">
          <Information />
          <MenuContent />
        </aside>
        <main className="relative max-w-full overflow-x-hidden py-2 md:basis-4/5 md:py-4">
          <h2 className="border-b-2 border-blue-300 pb-2 text-center text-sky-600 md:pb-4">
            {t(pathname.slice(1).replace('/', '.'))}
          </h2>
          {props.children}
        </main>
      </div>
    </>
  );
};

export default Layout;
