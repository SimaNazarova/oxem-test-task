'use client';
import Image from 'next/image';
import logoDark from '@/src/assets/svg/logo-dark.svg';
import logoLight from '@/src/assets/svg/logo-light.svg';
import useWindowSize from '@/src/hooks/useWindowSize';
import './HeaderLeftBlock.scss';

const HeaderLeftBlock = () => {
  const { width } = useWindowSize();

  return (
    <div className='headerLeftBlock'>
      <Image src={width > 320 ? logoDark : logoLight} alt='логотип' width={width > 1439 ? 200 : 166} />
      {width > 767 && (
        <>
          <div className='headerLeftBlock__verticalLine'></div>
          <p className='headerLeftBlock__leftSide-subtitle'>лизинговая компания</p>
        </>
      )}
    </div>
  );
};

export default HeaderLeftBlock;
