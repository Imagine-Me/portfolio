import { Html, Main, NextScript, Head } from "next/document";
export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <meta name="language" content="english" />
        <meta httpEquiv="content-type" content="text/html"></meta>
        <meta name="author" content="Prince Thomas"></meta>
        <meta name="designer" content="Prince Thomas"></meta>
        <meta name="publisher" content="Prince Thomas" />
        <meta name="no-email-collection" content="princekizhthara@gmail.com" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        <meta
          name="description"
          content="Hello there, I'm Prince Thomas. I started my career right after completing my bachelor's degree in computer science over five years ago. Since then, I have created successful websites that are fast, easy to use, and built with best practices."
        />
        <meta
          name="keywords"
          content="Prince Thomas, Portfolio"
        />
        <meta name="robots" content="index,follow" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="web" />
        <meta name="robots" content="noodp"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
