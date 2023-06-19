import { customTheme } from '@/main/utils/customTheme';
import { Html, Head, Main, NextScript } from 'next/document'
import React from "react";
export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/css/uikit.min.css"
        />
        <link
         rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />     
        <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/js/uikit-icons.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.js"></script>
        <title>Fit IT Solutions - Canadian IT Consulting Company</title>
      </Head>
      <body style={{backgroundColor:customTheme.palette.neutral.main,color:customTheme.palette.neutral.contrastText}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}