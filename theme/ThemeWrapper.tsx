import React from 'react'
import { ThemeProvider } from 'styled-components'

import { WithChildren } from '../types'
import { GlobalStyles } from './globalStyles'
import { theme } from './theme'

export const ThemeWrapper = ({ children }: WithChildren) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}
