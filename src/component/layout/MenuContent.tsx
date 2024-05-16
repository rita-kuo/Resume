import React from 'react';
import TextLink from '@/component/TextLink';
import { useTranslations } from 'next-intl';
import { usePathname } from '@/navigation';
import { BiCheck } from 'react-icons/bi';

const items = ['work-history', 'education', 'skills'];
const MenuContent: React.FC<{ onClick?: () => void }> = (props) => {
  const currentPathname = usePathname();
  const t = useTranslations('Title');
  return (
    <div className="grid grid-cols-[max-content_1fr] gap-x-2 gap-y-6">
      {items.map((pathname) => {
        const isCurrent = currentPathname.startsWith(`/${pathname}`);
        return isCurrent ? (
          <>
            <BiCheck className="h-6 w-6 text-teal-600" />
            <span className="cursor-default font-bold text-teal-600">
              {t(pathname)}
            </span>
          </>
        ) : (
          <div key={pathname} className="col-start-2 col-end-3">
            <TextLink href={`/${pathname}`} onClick={props.onClick}>
              {t(pathname)}
            </TextLink>
          </div>
        );
      })}
    </div>
  );
};

export default MenuContent;
