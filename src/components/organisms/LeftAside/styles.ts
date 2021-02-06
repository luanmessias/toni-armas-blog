import styled from 'styled-components'
import { maxDevice } from '@globalStyles/device'

export const Container = styled.aside`
  box-sizing: border-box;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.bgDark};
  width: ${({ theme }) => theme.LAsideWidth};
  border-right: 1px solid ${({ theme }) => theme.borderColor};
  box-sizing: border-box;
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
  visibility: visible;
  z-index: 999;

  @media ${maxDevice.laptop} {
    visibility: hidden;
    opacity: 0;
    top: 15px;

    left: inherit;
    width: calc(100% - 30px);
    height: auto;
    padding: 15px;
    border-radius: 10px;
    border: 0px;
    background-color: ${({ theme }) => theme.bg_mobmenu};
    overflow: hidden;
    right: -100%;
    box-shadow: 5px 5px 5px rgba(68, 68, 68, 0.2);
  }

  &[data-active='true'] {
    visibility: visible;
    opacity: 1;
    right: 15px;
  }
`
