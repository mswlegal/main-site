import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import '../styles/globals.css';
import Layout from '@/layouts/Layout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
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
      <PostHogProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PostHogProvider>
    </QueryClientProvider>
  );
}

export default appWithTranslation(MyApp);
