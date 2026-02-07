'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import AdvancedLoader from './AdvancedLoader';

export default function AppBoot({ children }) {
  const [appReady, setAppReady] = useState(false);
  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    // App is ready after hydration + paint
    const id = requestAnimationFrame(() => {
      setAppReady(true);
    });

    return () => cancelAnimationFrame(id);
  }, []);

  const showLoader = !(appReady && animationDone);

  return (
    <>
      <AnimatePresence>
        {showLoader && (
          <AdvancedLoader onComplete={() => setAnimationDone(true)} />
        )}
      </AnimatePresence>

      {children}
    </>
  );
}
