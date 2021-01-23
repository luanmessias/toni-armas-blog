import styled from 'styled-components'

export const Container = styled.aside<any>`
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
`
