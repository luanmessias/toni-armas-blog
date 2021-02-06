import styled from 'styled-components'
import { maxDevice } from '@globalStyles/device'

export const Container = styled.aside`
  box-sizing: border-box;
  border-left: 1px solid ${({ theme }) => theme.borderColor};
  background: ${({ theme }) => theme.bgDark};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  height: 100%;
  width: ${({ theme }) => theme.RAsideWidth};
  top: 0;
  right: 0;
  z-index: 999;
  > div {
    > div {
      padding: 20px;

      &:hover {
        svg {
          transform: scale(1.2);
          fill: ${({ theme }) => theme.colorOrangeMedium};
          * {
            fill: ${({ theme }) => theme.colorOrangeMedium};
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
    border-top: 1px solid ${({ theme }) => theme.borderColor};
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
