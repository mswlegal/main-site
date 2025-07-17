'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { usePostHog } from 'posthog-js/react';
import { useEffect } from 'react';

export function usePostHogPageViews() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const posthog = usePostHog();

  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') {
      const url = `${pathname}?${searchParams.toString()}`;
      posthog.capture('$pageview', { url });
    }
  }, [pathname, searchParams, posthog]);
}
