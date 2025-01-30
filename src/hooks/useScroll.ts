import { throttle } from 'lodash';
import { useCallback, useEffect, useState } from 'react';

export const useScroll = () => {
  const [state, setState] = useState({
    lastScrollTop: 0,
    bodyOffset: typeof window !== 'undefined' ? document.body.getBoundingClientRect() : 0,
    scrollY: typeof window !== 'undefined' ? window.scrollY : 0,
    scrollX: typeof window !== 'undefined' ? document.body.getBoundingClientRect().left : 0,
    scrollDirection: '', // down, up
  });

  const handleScrollEvent = useCallback(() => {
    // TODO: пофиксить тип
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    setState(prevState => {
      const prevLastScrollTop = prevState.lastScrollTop;
      const bodyOffset = document.body.getBoundingClientRect();

      return {
        setBodyOffset: bodyOffset,
        scrollY: -bodyOffset.top,
        scrollX: bodyOffset.left,
        scrollDirection: prevLastScrollTop > -bodyOffset.top ? 'down' : 'up',
        lastScrollTop: -bodyOffset.top,
      };
    });
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      handleScrollEvent();
    };
    window.addEventListener('scroll', throttle(scrollListener, 100));

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, [handleScrollEvent]);

  return {
    scrollY: state.scrollY,
    scrollX: state.scrollX,
    scrollDirection: state.scrollDirection,
  };
};

export default useScroll;
