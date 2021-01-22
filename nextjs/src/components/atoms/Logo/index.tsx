import React, { useEffect } from 'react'
import { useDarkModeContext } from '@context/DarkMode'
import LogoBlack from '@svg/LogoBlack'
import LogoWhite from '@svg/LogoWhite'
import Link from 'next/link'
import { Container } from './styles'

const Logo: React.FC = () => {
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
        <a>
          <Container>{checkThemeLamp()}</Container>
        </a>
      </Link>
    </>
  )
}

export default Logo
