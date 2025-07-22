'use client';

import posthog from 'posthog-js';
import { PostHogProvider as PHProvider } from 'posthog-js/react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

export function PostHogProvider({ children }) {
  useEffect(() => {
    // Ensure PostHog only initializes in production and not during SSR or on the initial render in development
    if (process.env.NODE_ENV !== 'development' && typeof window !== 'undefined') {
      const loadPostHog = () => {
        posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
          api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
          person_profiles: 'identified_only',
          capture_pageview: false, // We'll handle pageviews manually
          capture_uncaught_exceptions: true,
          capture_unhandled_rejections: true,
          enable_recording_console_log: true,
        });
      };

      // Load posthog.js asynchronously
      const script = document.createElement('script');
      script.src = 'https://cdn.posthog.com/posthog.js';
      script.async = true;
      script.onload = loadPostHog;
      document.head.appendChild(script);
      
      // Clean up on unmount
      return () => {
        document.head.removeChild(script);
      };
    }
  }, []);

  // If it's not in development, wrap children with the PostHogProvider
  if (process.env.NODE_ENV !== 'development' && typeof window !== 'undefined') {
    return <PHProvider client={posthog}>{children}</PHProvider>;
  }

  return <>{children}</>; // No PostHog tracking on local or SSR
}

PostHogProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
