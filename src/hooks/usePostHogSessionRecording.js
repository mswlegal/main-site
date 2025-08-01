import posthog from 'posthog-js';
import { useEffect } from 'react';

export function usePosthogSessionRecording(enabled) {
  useEffect(() => {
    if (typeof window === 'undefined' || process.env.NODE_ENV === 'development') return;

    if (enabled) {
      posthog.startSessionRecording();
    } else {
      posthog.stopSessionRecording();
    }

    return () => {
      posthog.stopSessionRecording();
    };
  }, [enabled]);
}
