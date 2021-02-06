import styled from 'styled-components'
import { maxDevice } from '@globalStyles/device'

export const Container = styled.div`
  cursor: pointer;

  &[data-active='true'] {
    svg {
      * {
        fill: ${({ theme }) => theme.colorOrangeMedium};
      }
    }
  }

  @media ${maxDevice.laptop} {
    display: none;
  }
`
