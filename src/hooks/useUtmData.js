import { useState, useEffect } from 'react';

export function useUtmData() {
  const [utmData, setUtmData] = useState({
    utm_campaign: null,
    utm_source: null,
    utm_medium: null,
    utm_term: null,
    utm_content: null
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window?.location?.search);
      setUtmData({
        utm_campaign: params?.get('utm_campaign'),
        utm_source: params?.get('utm_source'),
        utm_medium: params?.get('utm_medium'),
        utm_term: params?.get('utm_term'),
        utm_content: params?.get('utm_content')
      });
    }
  }, []);

  return utmData;
}
