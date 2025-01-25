import { Inter } from 'next/font/google';
import '../globals.css';
import React from 'react';

import { getMessages, getTranslations } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';

const inter = Inter({ subsets: ['latin'] });

export const generateMetadata = async (props: {
  params: { locale: string };
}) => {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Metadata',
  });

  return {
    title: t('title'),
  };
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  return (
    <html lang={params.locale}>
      <NextIntlClientProvider messages={messages}>
        <body className={`min-h-screen ${inter.className}`}>{children}</body>
      </NextIntlClientProvider>
    </html>
  );
}
