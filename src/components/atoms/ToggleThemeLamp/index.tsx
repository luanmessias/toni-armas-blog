import React, { useState } from 'react'
import { useDarkModeContext } from '@context/DarkMode'
import { Container } from './styles'
import LampOffSVG from '../../../svg/LampOff'
import LampOnSVG from '../../../svg/LampOn'

const ToggleThemeLamp = (): JSX.Element => {
  const [svgActive, setSvgActive] = useState(false)
  const { darkMode, setDarkMode } = useDarkModeContext()

  const checkThemeLamp = (): JSX.Element => {
    if (!svgActive) {
      return <LampOffSVG />
    }
    return <LampOnSVG />
  }

  return (
    <>
      <Container
        onClick={() => {
          setSvgActive(!svgActive)
          setDarkMode(!darkMode)
        }}
      >
        {checkThemeLamp()}
      </Container>
    </>
  )
}

export default ToggleThemeLamp
