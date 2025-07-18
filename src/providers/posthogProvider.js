'use client';

import posthog from 'posthog-js';
import { PostHogProvider as PHProvider } from 'posthog-js/react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

export function PostHogProvider({ children }) {
  useEffect(() => {
    // Check if we're in a local environment
    if (process.env.NODE_ENV !== 'development') {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
        person_profiles: 'identified_only',
        capture_pageview: false, // We'll handle pageviews manually
        capture_uncaught_exceptions: true,
        capture_unhandled_rejections: true,
        enable_recording_console_log: true
      });
    }
  }, []);

  // If it's not local, wrap children with the PostHogProvider
  if (process.env.NODE_ENV !== 'development') {
    return <>{children}</>; // No PostHog tracking on local
  }

  return <PHProvider client={posthog}>{children}</PHProvider>;
}

PostHogProvider.propTypes = {
  children: PropTypes.node.isRequired
};
