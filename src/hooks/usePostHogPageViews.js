'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { usePostHog } from 'posthog-js/react';

export function usePostHogPageViews() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const posthog = usePostHog();

  useEffect(() => {
    const url = `${pathname}?${searchParams.toString()}`;
    posthog.capture('$pageview', { url });
  }, [pathname, searchParams, posthog]);
}
