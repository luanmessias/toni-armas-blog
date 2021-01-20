import styled, { createGlobalStyle, keyframes } from 'styled-components'
import { motion } from 'framer-motion'
import { minDevice, maxDevice } from './device'

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  transition: all .3s;
}

body {
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  background: ${({ theme }) => theme.bg_body};
}

`

export const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`
export const Wrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export default GlobalStyle
