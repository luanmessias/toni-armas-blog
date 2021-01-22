import styled from 'styled-components'

export const Container = styled.div`
  cursor: pointer;

  &[data-active='true'] {
    svg {
      * {
        fill: ${({ theme }) => theme.color_orange_medium};
      }
    }
  }
`
