import styled from 'styled-components'
import { minDevice, maxDevice } from '@globalStyles/device'

export const Container = styled.aside`
  box-sizing: border-box;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.bg_dark};
  width: ${({ theme }) => theme.l_aside_width};
  border-right: 1px solid ${({ theme }) => theme.border_color};
  box-sizing: border-box;
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
  visibility: visible;

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
  }

  &[data-active='true'] {
    visibility: visible;
    opacity: 1;
    right: 15px;
  }
`
