// hooks/useLocalePath.js
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export function useLocalePath() {
  const router = useRouter();

  useEffect(() => {
    const { pathname, locale } = router;

    // If the locale is 'en' and the pathname starts with '/en', remove '/en'
    if (locale === 'en' && pathname.startsWith('/en')) {
      router.replace(pathname.replace(/^\/en/, ''), undefined, { locale, shallow: true });
    }

    // If the locale is not 'en' and pathname doesn't start with that locale, add the locale prefix
    if (locale !== 'en' && !pathname.startsWith(`/${locale}`)) {
      const newPathname = `/${locale}${pathname}`;
      router.replace(newPathname, newPathname, { locale, shallow: true });
    }
  }, [router]);
}
