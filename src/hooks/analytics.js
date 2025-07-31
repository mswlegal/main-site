import posthog from 'posthog-js';

const isBrowser = typeof window !== 'undefined';
const isProduction = process.env.NODE_ENV !== 'development';
const isPosthogAvailable = () => isBrowser && posthog && typeof posthog.capture === 'function';

// Queue Management (only in production browser env)
let posthogQueue = isBrowser && isProduction ? JSON.parse(localStorage.getItem('posthogQueue') || '[]') : [];

// Process the queue by sending events to PostHog if available
const processQueue = () => {
  if (!isPosthogAvailable()) return;

  posthogQueue.forEach(({ method, args }) => {
    if (typeof posthog[method] === 'function') {
      posthog[method](...args);
    }
  });

  // Clear the queue from localStorage after processing
  if (isBrowser) {
    localStorage.removeItem('posthogQueue');
  }

  // Stop periodic checks after the queue is processed
  clearInterval(intervalId);
};

// Log events, fallback to queue if PostHog is unavailable
const logWithFallback = (method, ...args) => {
  if (isPosthogAvailable() && isProduction) {
    if (typeof posthog[method] === 'function') {
      return posthog[method](...args);
    } else {
      console.error(`Unknown PostHog method: ${method}`);
    }
  } else if (isBrowser && isProduction) {
    // Queue the event for later if PostHog is unavailable
    posthogQueue.push({ method, args });
    localStorage.setItem('posthogQueue', JSON.stringify(posthogQueue));
    processQueue(); // Attempt to flush early
  }
};

// Public API
export const captureEvent = (eventName, properties = {}) => {
  logWithFallback('capture', eventName, properties);
};

export const identifyUser = (id, properties = {}) => {
  logWithFallback('identify', id, properties);
};

export const getDistinctId = () => {
  if (isPosthogAvailable() && typeof posthog.get_distinct_id === 'function') {
    return posthog.get_distinct_id();
  }

  logWithFallback('get_distinct_id', 'called');
  return 'anonymous';
};

// Periodic check (only in production browser env)
let intervalId = null;
if (isBrowser && isProduction) {
  intervalId = setInterval(processQueue, 1000);
}
