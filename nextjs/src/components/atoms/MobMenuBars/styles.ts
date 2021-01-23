import styled from 'styled-components'

export const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.bg_mobmenu};
  border-radius: 100%;
  position: fixed;
  right: 25px;
  top: 25px;
  width: 40px;
  height: 40px;
  z-index: 999;
`

export const TopBar = styled.div`
  position: absolute;
  top: 0%;
  transform: rotate(0deg);
`

export const MidBar = styled.div`
  position: absolute;
  top: 50%;
  right: 0px;
  transform: translateY(-50%);
  visibility: visible;
  opacity: 1;
`

export const BotBar = styled.div`
  position: absolute;
  bottom: 0%;
  transform: rotate(0deg);
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 16px;
  width: 20px;
  position: relative;

  > div {
    width: 20px;
    height: 2px;
    background-color: ${({ theme }) => theme.bg_reverse};
  }

  &[data-active='true'] {
    width: 30px;
    margin-top: -10px;
    > div {
      width: 30px;
    }

    ${TopBar} {
      position: absolute;
      top: 50%;
      transform: rotate(45deg);
    }

    ${MidBar} {
      visibility: hidden;
      opacity: 0;
    }

    ${BotBar} {
      position: absolute;
      top: 50%;
      transform: rotate(-45deg);
    }
  }
`
