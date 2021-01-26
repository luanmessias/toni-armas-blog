import React from 'react'
import { useDarkModeContext } from '@context/DarkMode'
import LogoBlack from '@svg/LogoBlack'
import LogoWhite from '@svg/LogoWhite'
import Link from 'next/link'
import { Container } from './styles'

const Logo = (): JSX.Element => {
  const { darkMode } = useDarkModeContext()

  const checkThemeLamp = (): JSX.Element => {
    if (!darkMode) {
      return <LogoBlack />
    }
    return <LogoWhite />
  }

  return (
    <>
      <Link href="/">
        <a href="/" aria-label="Logo Toni Armas">
          <Container>{checkThemeLamp()}</Container>
        </a>
      </Link>
    </>
  )
}

export default Logo
