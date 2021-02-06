import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: centere;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  border-radius: 50%;

  svg {
    * {
      fill: ${({ theme }) => theme.colorOrangeMedium};
    }
  }

  &:hover {
    background-color: ${({ theme }) => theme.colorOrangeMedium};
    svg {
      * {
        fill: #fff;
      }
    }
  }
`
