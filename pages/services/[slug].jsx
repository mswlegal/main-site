import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ServiceSlugRedirect() {
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if (slug) {
      router.replace({
        pathname: '/contact',
        query: { slug } // Pass slug as a query param
      });
    }
  }, [router, slug]);

  return null;
}
