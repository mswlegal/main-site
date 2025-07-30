import posthog from 'posthog-js';

// ENV & Platform Checks
const isBrowser = typeof window !== 'undefined';
const isProduction = process.env.NODE_ENV !== 'development';

// PostHog Availability Check
const isPosthogAvailable = () => isBrowser && posthog && typeof posthog.capture === 'function';

// Method map for PostHog functions
const methodMap = {
  capture: posthog.capture,
  identify: posthog.identify,
  get_distinct_id: posthog.get_distinct_id
};

// Queue Management (only in production browser env)
let posthogQueue = isBrowser && isProduction ? JSON.parse(localStorage.getItem('posthogQueue') || '[]') : [];

const processQueue = () => {
  if (!isPosthogAvailable()) return;

  posthogQueue.forEach(({ method, args }) => {
    const fn = methodMap[method];
    if (fn) fn(...args);
  });

  if (isBrowser) {
    localStorage.removeItem('posthogQueue');
  }

  // Stop checking for PostHog availability after the queue is processed
  clearInterval(intervalId);
};

const logWithFallback = (method, ...args) => {
  const fn = methodMap[method];

  if (isPosthogAvailable() && isProduction) {
    if (fn) {
      return fn(...args);
    } else {
      console.error(`Unknown PostHog method: ${method}`);
    }
  } else if (isBrowser && isProduction) {
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
