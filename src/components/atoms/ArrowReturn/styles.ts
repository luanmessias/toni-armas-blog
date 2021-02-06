import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  z-index: 2;
  top: 35px;
  left: 35px;
  cursor: pointer;
  svg {
    transform: rotate(-90deg);
    width: 25px;
    height: 25px;
    fill: #fff;
    * {
      fill: #fff;
    }
  }

  &:hover {
    transform: scale(1.5);
  }
`
