// 'use server'
import './css/style.css'
import './ui/global.css'
import { Inter, Architects_Daughter } from 'next/font/google'
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import Header from '@/src/components/ui/header'
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const architects_daughter = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-architects-daughter',
  weight: '400',
  display: 'swap'
})

export const metadata = {
  title: 'Hanglok Remind',
  description: 'Generated by create next app',
}
export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased text-gray-200 tracking-tight`}>
      <NextIntlClientProvider messages={messages} >
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header  />
          {children}
          {/* <Banner /> */}
        </div>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

 