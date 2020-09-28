import {useLayoutEffect} from 'react';

export default function useLockBodyScroll() {
    useLayoutEffect(() => {
        const originalStyle = window
            .getComputedStyle(document.body)
            .overflow;

        const scrollWidth = calcScroll();
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = scrollWidth + 'px';
        return () => {
          document.body.style.marginRight = "";
          document.body.style.overflow = originalStyle;
        }
    }, []);
}

function calcScroll() {
  let div = document.createElement('div');

  div.style.overflowY = 'scroll';
  div.style.width = '50px';
  div.style.height = '50px';
  
  document.body.append(div);
  let scrollWidth = div.offsetWidth - div.clientWidth;
  
  div.remove();
  return scrollWidth
}