import posthog from 'posthog-js';

const isPosthogAvailable = () =>
  typeof window !== 'undefined' && posthog && typeof posthog.capture === 'function';

export const captureEvent = (eventName, properties = {}) => {
  if (isPosthogAvailable()) {
    posthog.capture(eventName, properties);
  } else {
    console.log(`[Analytics Fallback] captureEvent: ${eventName}`, properties);
  }
};

export const identifyUser = (id, properties = {}) => {
  if (isPosthogAvailable() && typeof posthog.identify === 'function') {
    posthog.identify(id, properties);
  } else {
    console.log(`[Analytics Fallback] identifyUser: ${id}`, properties);
  }
};

export const getDistinctId = () => {
  if (isPosthogAvailable() && typeof posthog.get_distinct_id === 'function') {
    return posthog.get_distinct_id();
  }
  console.log('[Analytics Fallback] getDistinctId called');
  return 'anonymous';
};
