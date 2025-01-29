'use client';
import Image from 'next/image';
import logo from '@/src/assets/svg/logo.svg';
import useWindowSize from '@/src/hooks/useWindowSize';
import './HeaderLeftBlock.scss';

const HeaderLeftBlock = () => {
  const { width } = useWindowSize();

  return (
    <div className='headerLeftBlock'>
      <Image src={logo} alt='логотип' width={width > 1439 ? 200 : 166} />
      {width > 768 && (
        <>
          <div className='headerLeftBlock__verticalLine'></div>
          <p className='headerLeftBlock__leftSide-subtitle'>лизинговая компания</p>
        </>
      )}
    </div>
  );
};

export default HeaderLeftBlock;
