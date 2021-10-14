import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

import '@/styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <DefaultSeo
        titleTemplate="%s | nextjs-typescript-boilerplate"
        defaultTitle="nextjs-typescript-boilerplate"
        description="NextJS with Typescript boilerplate"
      />
      <Component {...pageProps} />
    </>
  );
}
