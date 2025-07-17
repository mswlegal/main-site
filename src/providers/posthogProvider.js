'use client';

import posthog from 'posthog-js';
import { PostHogProvider as PHProvider } from 'posthog-js/react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

export function PostHogProvider({ children }) {
  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
      person_profiles: 'identified_only',
      capture_pageview: false // We'll do it manually
    });
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}

PostHogProvider.propTypes = {
  children: PropTypes.node.isRequired
};
