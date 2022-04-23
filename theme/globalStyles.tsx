import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Head from 'next/head'

import reset from './reset'

const MainGlobalStyles = createGlobalStyle<{ baseUrl?: string }>`
  @font-face {
    font-family: 'Grenette';
    font-weight: 400;
  }

  ${reset}

  html {
    font-size: 62.5%;
    height: 100%;
  }

  body {
    height: 100%;
  }

  /** Typical dev expectations - from normalize.css */
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
  }

  b, strong {
    font-weight: 500;
  }
`

export const GlobalStyles = () => (
  <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
    </Head>
    <MainGlobalStyles />
  </>
)
