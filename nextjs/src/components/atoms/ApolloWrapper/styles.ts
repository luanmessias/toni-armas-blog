import styled from 'styled-components'
import { maxDevice } from '@globalStyles/device'

export const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media ${maxDevice.laptop} {
    flex-direction: column;
  }
`
