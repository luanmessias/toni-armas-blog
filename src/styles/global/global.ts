import styled, { createGlobalStyle } from 'styled-components'
import { maxDevice } from './device'

const config = {
  animTime: '.3s'
}

const lAsideWidth = ({ theme }) => theme.LAsideWidth
const rAsideWidth = ({ theme }) => theme.RAsideWidth

type themePropTypes = {
  theme: {
    colorOrangeLight: string
    colorOrangeMedium: string
    colorOrangeDark: string
    LAsideWidth: string
    RAsideWidth: string
    bgBody: string
    bgDark: string
    bgLight: string
    borderColor: string
    txtColorBase: string
    txtColorDark: string
    txtColorMid: string
    txtColorLight: string
  }
}

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  transition:
    background-color ${config.animTime},
    transform ${config.animTime},
    visibility ${config.animTime},
    left ${config.animTime},
    top ${config.animTime},
    right ${config.animTime},
    bottom ${config.animTime},
    opacity ${config.animTime};

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
    background-color: ${({ theme }) => theme.colorOrangeMedium};
    border-radius: 5px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colorOrangeMedium};
  }
}

body {
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  background: ${({ theme }: themePropTypes) => theme.bgBody};
  color: ${({ theme }: themePropTypes) => theme.txtColorBase};

  a {
    text-decoration: none;
    * {
      color: ${({ theme }: themePropTypes) => theme.txtColorBase};
    }
  }

  overflow-x: hidden;


}

body {
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  background: ${({ theme }: themePropTypes) => theme.bgBody};
  color: ${({ theme }: themePropTypes) => theme.txtColorBase};

  a {
    text-decoration: none;
    * {
      color: ${({ theme }: themePropTypes) => theme.txtColorBase};
    }
  }

  overflow-x: hidden;


}

#__next {
  width: 100vw;
  height: 100vh;
}
`

export const Main = styled.main`
  box-sizing: border-box;
  height: 100%;
  width: calc(100% - (${lAsideWidth} + ${rAsideWidth}));
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin-left: ${lAsideWidth};
  margin-right: ${rAsideWidth};

  @media ${maxDevice.laptop} {
    margin: 0px;
    width: 100%;
  }
`

export default GlobalStyle
