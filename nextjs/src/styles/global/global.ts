import styled, {
  createGlobalStyle,
  GlobalStyleComponent,
  keyframes
} from 'styled-components'
import { motion } from 'framer-motion'
import { minDevice, maxDevice } from './device'

const GlobalStyle = createGlobalStyle<any>`
* {
  margin: 0;
  padding: 0;
  transition: all .3s;
}

body {
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  background: ${({ theme }) => theme.bg_body};
}

#__next {
  width: 100vw;
  height: 100vh;
}
`

export const Main = styled.main`
  box-sizing: border-box;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const Wrapper = styled(motion.div)`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export default GlobalStyle
