import styled from 'styled-components'
import { maxDevice } from '@globalStyles/device'

export const Container = styled.aside`
  box-sizing: border-box;
  border-left: 1px solid ${({ theme }) => theme.border_color};
  background: ${({ theme }) => theme.bg_dark};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  height: 100%;
  width: ${({ theme }) => theme.r_aside_width};
  top: 0;
  right: 0;
  > div {
    > div {
      padding: 20px;

      &:hover {
        svg {
          transform: scale(1.2);
          fill: ${({ theme }) => theme.color_orange_medium};
          * {
            fill: ${({ theme }) => theme.color_orange_medium};
          }
        }
      }
    }
  }

  @media ${maxDevice.laptop} {
    flex-direction: row;
    width: 100%;
    height: 60px;
    bottom: 0;
    top: inherit;
    border-left: none;
    border-top: 1px solid ${({ theme }) => theme.border_color};
    > div {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      width: 50%;
      > div {
        svg {
          width: 25px;
          height: 25px;
        }
      }
    }
  }
`
