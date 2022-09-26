/* eslint-disable*/

import "../styles/globals.css";
import { ThemeProvider } from 'next-themes';

import { appWithTranslation } from "next-i18next";
// import Head from "next/head";
// import { Html } from "next/document";

function MyApp({ Component, pageProps }) {
//   <Html>
//  <Head>
//     <style>
//       @import
//       url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap');
//     </style>
//   </Head>;
//   </Html>
 
  return( <ThemeProvider>
  <Component {...pageProps} />

  </ThemeProvider>
  )
}

export default appWithTranslation(MyApp);
