import styled, { createGlobalStyle } from 'styled-components'
import { maxDevice } from './device'

type themePropTypes = {
  theme: {
    color_orange_light: string
    color_orange_medium: string
    color_orange_dark: string
    l_aside_width: string
    r_aside_width: string
    bg_body: string
    bg_dark: string
    bg_light: string
    border_color: string
    txt_color_base: string
    txt_color_dark: string
    txt_color_mid: string
    txt_color_light: string
  }
}

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  transition: all .3s;
}

body {
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  background: ${({ theme }: themePropTypes) => theme.bg_body};
  color: ${({ theme }: themePropTypes) => theme.txt_color_base};

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
