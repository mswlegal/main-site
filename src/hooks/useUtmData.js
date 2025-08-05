import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export function useUtmData() {
  const [utmData, setUtmData] = useState({
    utm_campaign: null,
    utm_source: null,
    utm_medium: null,
    utm_term: null,
    utm_content: null
  });

  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isLandingPage =
        router.pathname.startsWith('/landing') || router.pathname.startsWith('/es/landing');

      const params = new URLSearchParams(window.location.search);
      setUtmData({
        utm_campaign: params.get('utm_campaign') || params.get('gad_campaignid'),
        utm_source: params.get('utm_source'),
        utm_medium: isLandingPage ? 'landingpage' : params.get('utm_medium'),
        utm_term: params.get('utm_term'),
        utm_content: params.get('utm_content')
      });
    }
  }, [router.pathname]);

  return utmData;
}
