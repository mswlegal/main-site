'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { usePostHog } from 'posthog-js/react';
import { useEffect } from 'react';

// Shared environment check function
const initiateTracking = () => process.env.NODE_ENV !== 'development';

export function usePostHogPageViews() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const posthog = usePostHog();
  const url = `${pathname}?${searchParams.toString()}`;

  useEffect(() => {
    if (initiateTracking()) {
      posthog.capture('$pageview', { url });
    }
  }, [url, posthog]);

  useEffect(() => {
    if (initiateTracking()) {
      const handlePageLeave = () => {
        posthog.capture('$pageleave', { url });
      };

      window.addEventListener('beforeunload', handlePageLeave);

      return () => {
        window.removeEventListener('beforeunload', handlePageLeave);
      };
    }
  }, [url, posthog]);
}
