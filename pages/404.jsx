import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from './index.module.scss';

export default function Custom404() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Page Not Found | 404</title>
      </Head>
      <div className={styles.page404}>
        <h1>404</h1>
        <h2>Oops! The page you're looking for doesn't exist.</h2>
        <p>It might have been removed, renamed, or did not exist in the first place.</p>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link href="/" className={styles.button}>
            Go to Homepage
          </Link>
        </div>
      </div>
    </>
  );
}
