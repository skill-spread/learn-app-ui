import type { AppProps } from 'next/app'

import { ThemeWrapper } from '../theme/ThemeWrapper'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeWrapper>
      <Component {...pageProps} />
    </ThemeWrapper>
  )
}

export default MyApp
