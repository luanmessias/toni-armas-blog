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
  color: ${({ theme }) => theme.txt_color_base};

  overflow-x: hidden;

  /* width */
  ::-webkit-scrollbar {
    width: 3px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background-color: #000;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.color_orange_medium};
    border-radius: 5px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.color_orange_medium};
  }
}

#__next {
  width: 100vw;
  height: 100vh;
}
`

export const Main = styled.main`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin-left: ${({ theme }) => theme.l_aside_width};
  margin-right: ${({ theme }) => theme.r_aside_width};

  @media ${maxDevice.laptop} {
    margin: 0px;
  }
`

export default GlobalStyle
