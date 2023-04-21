import { Html, Head, Main, NextScript } from 'next/document';
import { Header, Footer } from '@/components/Common';

export default function Document() {
  return (
    <Html lang="ja">
      <Head />
      <body>
        <Header />
        <main className="mt-4">
          <div className='max-w-screen-lg mx-auto px-4'>
            <Main />
          </div>
        </main>
        <Footer />
        <NextScript />
      </body>
    </Html>
  );
}
