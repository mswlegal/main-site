import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function ServicePage() {
  const router = useRouter();

  // redirect to contact page for now
  useEffect(() => {
    router.replace('/contact');
  }, [router]);

  return null;
}
