import React, { useContext } from 'react'
import { useDarkModeContext } from '@context/DarkMode'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './styles'

interface ThemeType {
  bg_body: string
  bg_dark: string
  bg_light: string
  txt_color_dark: string
  txt_color_mid: string
  txt_color_light: string
}

const Theme: React.FC = ({ children }): JSX.Element => {
  const { darkMode } = useDarkModeContext()

  const setTheme = (): ThemeType => {
    if (!darkMode) {
      return darkTheme
    }
    return lightTheme
  }

  return <ThemeProvider theme={setTheme}>{children}</ThemeProvider>
}

export default Theme
