'use client';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  const mobile = useMediaQuery({ query: '(max-width: 1280px)' });

  useEffect(() => {
    setIsMobile(mobile);
  }, [mobile]);

  return isMobile;
}
