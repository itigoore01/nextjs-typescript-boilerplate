import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  override render(): JSX.Element {
    return (
      <Html lang="ja">
        <Head />
        <body className="text-default break-words antialiased bg-default">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
