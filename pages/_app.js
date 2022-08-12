import "../styles/globals.css";
import Head from "next/head";
import { Html } from "next/document";

function MyApp({ Component, pageProps }) {
  <Html>
 <Head>
    <style>
      @import
      url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap');
    </style>
  </Head>;
  </Html>
 
  return <Component {...pageProps} />;
}

export default MyApp;
