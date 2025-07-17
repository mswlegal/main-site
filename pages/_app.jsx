import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import '../styles/globals.css';
import Layout from '@/layouts/Layout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Script from 'next/script';
import { appWithTranslation } from 'next-i18next';
import { useLocalePath } from '@/hooks/routeResolver';
import { PostHogProvider } from '@/providers/posthogProvider';
import { usePostHogPageViews } from '@/hooks/usePostHogPageViews';

/* eslint react/prop-types: 0 */
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 15 * 1000,
      refetchOnWindowFocus: 'always',
      useErrorBoundary: true
    },
    mutations: {
      useErrorBoundary: true
    }
  }
});

function MyApp({ Component, pageProps }) {
  useLocalePath();
  usePostHogPageViews();

  return (
    <QueryClientProvider client={queryClient}>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=AW-10869537885`}
        strategy="afterInteractive" // Loads after the page becomes interactive
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-10869537885');
          `
        }}
      />
      <PostHogProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PostHogProvider>
    </QueryClientProvider>
  );
}

export default appWithTranslation(MyApp);
