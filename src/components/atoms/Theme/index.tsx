import React from 'react'
import { useDarkModeContext } from '@context/DarkMode'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './styles'

type ChildrenProps = {
  children: React.ReactNode
}

const Theme = ({ children }: ChildrenProps): React.ReactElement => {
  const { darkMode } = useDarkModeContext()

  const setTheme = () => {
    if (darkMode) {
      return darkTheme
    }
    return lightTheme
  }

  return <ThemeProvider theme={setTheme}>{children}</ThemeProvider>
}

export default Theme
