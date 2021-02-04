import React, { useState } from 'react'
import { useDarkModeContext } from '@context/DarkMode'
import LampOffSVG from '@svg/LampOff'
import LampOnSVG from '@svg/LampOn'
import { Container } from './styles'

const ToggleThemeLamp = (): React.ReactElement => {
  const [svgActive, setSvgActive] = useState(false)
  const { darkMode, setDarkMode } = useDarkModeContext()

  const checkThemeLamp = (): React.ReactElement => {
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
