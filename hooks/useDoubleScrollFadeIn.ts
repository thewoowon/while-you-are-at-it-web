import { useEffect, useRef, useCallback } from "react";

const useDoubleScrollFadeIn = (threshold: number, transform: string) => {
  const dom1 = useRef<HTMLDivElement>(null);
  const dom2 = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(([entry]: IntersectionObserverEntry[]) => {
    const { current: current1 } = dom1;
    const { current: current2 } = dom2;
    if (entry.isIntersecting && current1) {
      // 원하는 이벤트를 추가 할 것
      current1.style.transitionProperty = "opacity transform";
      current1.style.transitionDuration = "1s";
      current1.style.transitionTimingFunction = "cubic-bezier(0, 0, 0.2, 1)";
      current1.style.transitionDelay = "0s";
      current1.style.opacity = "1";
      current1.style.transform = "translate3d(0, 0, 0)";
    }

    if (entry.isIntersecting && current2) {
      // 원하는 이벤트를 추가 할 것
      current2.style.transitionProperty = "opacity transform";
      current2.style.transitionDuration = "1s";
      current2.style.transitionTimingFunction = "cubic-bezier(0, 0, 0.2, 1)";
      current2.style.transitionDelay = "0.5s";
      current2.style.opacity = "1";
      current2.style.transform = "translate3d(0, 0, 0)";
    }
  }, []);

  useEffect(() => {
    let observer: IntersectionObserver;
    const { current: current1 } = dom1;
    const { current: current2 } = dom2;

    if (current1) {
      observer = new IntersectionObserver(handleScroll, {
        threshold: threshold || 0.7,
      });
      observer.observe(current1);

      return () => observer && observer.disconnect();
    }

    if (current2) {
      observer = new IntersectionObserver(handleScroll, {
        threshold: threshold || 0.7,
      });
      observer.observe(current2);

      return () => observer && observer.disconnect();
    }
  }, [handleScroll]);

  return [
    {
      ref: dom1,
      style: {
        opacity: 0,
        transform: `translate3d(0, ${transform || "50%"}, 0)`,
      },
    },
    {
      ref: dom2,
      style: {
        opacity: 0,
        transform: `translate3d(0, ${transform || "50%"}, 0)`,
      },
    },
  ];
};

export default useDoubleScrollFadeIn;
