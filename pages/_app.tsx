import '../styles/globals.css';
import type { AppProps } from 'next/app';
import NextNprogress from 'nextjs-progressbar';
import { SessionProvider } from 'next-auth/react';
function MyApp({ Component, pageProps: {session, ...pageProps} }: AppProps) {


  return (
    <>
    <SessionProvider session={session}>
      <NextNprogress
        color="red"
        startPosition={0.3}
        stopDelayMs={200}
        height={4}
      />
      <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default MyApp;
