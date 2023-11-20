/* eslint-disable @next/next/no-page-custom-font */
import "bootstrap/dist/css/bootstrap.min.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/globals.css";
import Head from "next/head";
config.autoAddCss = false;

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/static/favicon.svg" />
        <title>Digital Wonders</title>
      </Head>
      <link href="https://fonts.googleapis.com/css2?family=Work+Sans&display=swap" rel="stylesheet" />
      <Component {...pageProps} />
    </>
  );
}
