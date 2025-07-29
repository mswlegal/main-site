import posthog from 'posthog-js';

// Utility function to check if PostHog is available
const isPosthogAvailable = () =>
  typeof window !== 'undefined' && posthog && typeof posthog.capture === 'function';

// Check if we are running in the browser (i.e., client-side)
const isBrowser = typeof window !== 'undefined';

// Initialize the event queue from localStorage (only in the browser)
let posthogQueue = isBrowser ? JSON.parse(localStorage.getItem('posthogQueue')) || [] : [];

// Method map for PostHog actions
const methodMap = {
  capture: posthog.capture,
  identify: posthog.identify,
  get_distinct_id: posthog.get_distinct_id
};

// Process the queued events once PostHog is available
const processQueue = () => {
  if (isPosthogAvailable()) {
    posthogQueue.forEach(({ method, args }) => {
      const methodFn = methodMap[method];
      if (methodFn) {
        methodFn(...args);
      }
    });

    if (isBrowser) {
      // Clear the queue in localStorage once the events are processed
      localStorage.removeItem('posthogQueue');
    }

    // Stop checking for PostHog availability after the queue is processed
    clearInterval(intervalId);
  }
};

// Log events and handle fallback when PostHog is not available
const logFallback = (method, ...args) => {
  if (isPosthogAvailable()) {
    const methodFn = methodMap[method];
    if (methodFn) {
      return methodFn(...args);
    } else {
      console.error(`Unknown method: ${method}`);
    }
  } else {
    if (isBrowser) {
      // Queue the event in localStorage if PostHog isn't available
      posthogQueue.push({ method, args });
      localStorage.setItem('posthogQueue', JSON.stringify(posthogQueue));
    }
    processQueue(); // Ensure the queue is processed when PostHog becomes available
  }
};

// Public API to capture events
export const captureEvent = (eventName, properties = {}) => {
  logFallback('capture', eventName, properties);
};

// Public API to identify users
export const identifyUser = (id, properties = {}) => {
  logFallback('identify', id, properties);
};

// Public API to get the distinct ID of the user
export const getDistinctId = () => {
  if (isPosthogAvailable() && typeof posthog.get_distinct_id === 'function') {
    return posthog.get_distinct_id();
  }
  logFallback('get_distinct_id', 'called');
  return 'anonymous';
};

// Set an interval to periodically check for PostHog availability and process the queue
let intervalId = null;
if (isBrowser) {
  intervalId = setInterval(processQueue, 1000); // Check every 1 second
}
