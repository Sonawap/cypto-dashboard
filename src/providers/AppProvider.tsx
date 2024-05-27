import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactNode, Suspense } from 'react';
import { Toaster } from 'sonner';
import { ErrorBoundary } from '@/components/layout';
import { queryClient } from '@/libs/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { Loading } from '@/components/Elements';

export default function AppProvider({
  children,
}: {
  children: ReactNode
}) {
  const handleQueryClient = queryClient;

  return (
    <Suspense
      fallback={<Loading />}
    >
      <div className='bg-bgDark-800 text-white'>
        <ErrorBoundary>
          <HelmetProvider>
            <QueryClientProvider client={handleQueryClient}>
              <ReactQueryDevtools initialIsOpen={false} />
              <Toaster 
                richColors 
                position='top-right' 
                theme="dark"
              />
              <main className="font-body">
                {children}
              </main>
            </QueryClientProvider>
          </HelmetProvider>
        </ErrorBoundary>
      </div>
    </Suspense>
  );
}
