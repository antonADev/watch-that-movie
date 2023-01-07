import { useState, useEffect, useRef, useCallback } from 'react';

export const useOnClickOutside = (ref, handler) => {
  useEffect(
    () => {
      const listener = (event) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }

        handler(event);
      };

      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);

      return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  );
};

// export const useIntersect = ({
//   root = null,
//   rootMargin = '0px',
//   threshold = 0,
// }) => {
//   const [entries, setEntries] = useState([]);
//   const [observedNodes, setObservedNodes] = useState([]);
//   const observer = useRef(null);

//   useEffect(() => {
//     if (observer.current) {
//       observer.current.disconnect();
//     }

//     observer.current = new IntersectionObserver(
//       (entries) => setEntries(entries),
//       {
//         root,
//         rootMargin,
//         threshold,
//       }
//     );

//     const { current: currentObserver } = observer;

//     for (const node of observedNodes) {
//       currentObserver.observe(node);
//     }

//     return () => currentObserver.disconnect();
//   }, [observedNodes, root, rootMargin, threshold]);

//   return [entries, setObservedNodes];
// };

export const useIntersectionObserver = (ref, options) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const currentRef = ref;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(entry.isIntersecting);
        observer.disconnect();
      }
    }, options);

    if (currentRef.current) {
      observer.observe(currentRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  return isIntersecting;
};
