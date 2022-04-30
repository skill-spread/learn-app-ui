import React from 'react'
import { ThemeProvider } from 'styled-components'

import { WithChildren } from '../../types'
import { GlobalStyles } from '@theme/globalStyles'
import { theme } from '@theme/theme'

export const ThemeWrapper = ({ children }: WithChildren) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}
