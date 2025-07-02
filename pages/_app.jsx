import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import '../styles/globals.css';
import Layout from '@/layouts/Layout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

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
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}

export default MyApp;
