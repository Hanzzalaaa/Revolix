'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function TrackPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + (searchParams?.toString() ? `?${searchParams}` : '');

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'pageview',
      page: url,
    });
  }, [pathname, searchParams]);

  return null;
}