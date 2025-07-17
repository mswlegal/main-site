'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { usePostHog } from 'posthog-js/react';
import { useEffect, useRef } from 'react';

const initiateTracking = () => process.env.NODE_ENV !== 'development';

export function usePostHogPageViews() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const posthog = usePostHog();
  const lastUrl = useRef(null);

  // Build full URL with query params
  const url = searchParams.toString() ? `${pathname}?${searchParams.toString()}` : pathname;

  useEffect(() => {
    if (!initiateTracking() || !posthog) return;

    // Only capture when the URL actually changes
    if (url && lastUrl.current !== url) {
      posthog.capture('$pageview', { url });
      lastUrl.current = url;
    }
  }, [url, posthog]);

  useEffect(() => {
    if (!initiateTracking() || !posthog) return;

    const handlePageLeave = () => {
      posthog.capture('$pageleave', { url });
    };

    window.addEventListener('beforeunload', handlePageLeave);
    return () => {
      window.removeEventListener('beforeunload', handlePageLeave);
    };
  }, [url, posthog]);
}
