import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  override render(): JSX.Element {
    return (
      <Html lang="ja">
        <Head />
        <body className="break-words bg-default text-default antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
