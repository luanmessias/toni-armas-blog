import styled from 'styled-components'
import { maxDevice } from '@globalStyles/device'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  padding: 15px;

  @media ${maxDevice.laptop} {
    padding-bottom: 100px;
  }
`
