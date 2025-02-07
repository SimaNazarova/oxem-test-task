'use client';
import { useStore } from '@/src/store/store';
import './InfoTooltip.scss';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

function InfoTooltip() {
  const { openTooltip, setOpenTooltip, tooltipMessage } = useStore();
  const tooltipTl = gsap.timeline();

  const tooltipRef = useRef(null);
  useEffect(() => {
    if (openTooltip) {
      tooltipTl
        .fromTo(
          '.infoTooltip',
          {
            x: '150%',
            opacity: 0.5,
            duration: 3,
            ease: 'power2.out',
          },
          {
            x: '0',
            opacity: 1,
          },
        )
        .to('.infoTooltip', {
          opacity: 0.5,
          delay: 3,
          ease: 'power2.out',
          duration: 3,
          x: '150%',
          onComplete: () => {
            setOpenTooltip(false);
          },
        });
    }
  }, [openTooltip]);

  if (!openTooltip) return null;
  return (
    <div onClick={() => setOpenTooltip(false)} ref={tooltipRef} className='infoTooltip'>
      {tooltipMessage}
    </div>
  );
}

export default InfoTooltip;
