import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Epilogue:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="overflow-x-hidden lg:px-8">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
