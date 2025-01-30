import { Suspense } from 'react';
import ServerHeader from './ServerHeader/ServerHeader';
import ClientHeader from './ClientHeader/ClientHeader';

const Header = () => {
  return (
    <Suspense fallback={<ServerHeader />}>
      <ClientHeader />
    </Suspense>
  );
};

export default Header;
