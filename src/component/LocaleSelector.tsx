import React from 'react';
import {locales} from '@/i18n';
import {useTranslations} from 'next-intl';
import TextLink from '@/component/TextLink';
import {usePathname} from '@/navigation';
import {useLocale} from 'use-intl';

export const LocaleSelector: React.FC = () => {
    const pathname = usePathname();
    const currentLocale = useLocale();
    const t = useTranslations('LocaleSelector');
    return (
        <div className="flex items-center gap-2 [&>*+*]:border-l [&>*+*]:pl-2 [&>*]:border-blue-900">
            {locales.map((locale, index) => (
                <div
                    key={locale}
                    className={`${locale === currentLocale ? 'font-bold' : 'underline'}`}
                >
                    <TextLink locale={locale} href={pathname}>
                        {t('locale', {locale})}
                    </TextLink>
                </div>
            ))}
        </div>
    );
};
