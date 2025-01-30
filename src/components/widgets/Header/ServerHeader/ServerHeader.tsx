import Link from 'next/link';
import SmallButton from '../../../shared/SmallButton/SmallButton';
import { menu } from '../../../../constants/mock-data';
import HeaderLeftBlock from '../HeaderLeftBlock/HeaderLeftBlock';

const ServerHeader = () => {
  return (
    <header className='header'>
      <div className='header__container'>
        <HeaderLeftBlock />
        <nav className='header__rightSide'>
          <ul className='header__rightSide-menu'>
            {menu.map(item => (
              <li key={item.id} className='header__rightSide-item'>
                <Link href='#'>{item.title}</Link>
              </li>
            ))}
          </ul>
          <SmallButton isValid={true} text='Оставить заявку' type='transparent' />
        </nav>
      </div>
    </header>
  );
};

export default ServerHeader;
