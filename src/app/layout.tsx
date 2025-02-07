import type { Metadata } from 'next';

import '../styles/globals.scss';
import Header from '../components/widgets/Header/Header';
import Modal from '../components/widgets/Modal/Modal';
import MobileMenu from '../components/widgets/MobileMenu/MobileMenu';
import InfoTooltip from '../components/shared/InfoTooltip/InfoTooltip';

export const metadata: Metadata = {
  title: 'Oxem test task',
  description: 'Тестовое задание для Oxem',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru'>
      <body>
        <Header />
        <div className='container'>{children}</div>
        <Modal />
        <MobileMenu />
        <InfoTooltip />
      </body>
    </html>
  );
}
