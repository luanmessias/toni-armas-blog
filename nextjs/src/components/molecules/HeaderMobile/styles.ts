import styled from 'styled-components'
import { minDevice, maxDevice } from '@globalStyles/device'

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-image: url('img/bg_top_mob.png');
  background-repeat: no-repeat;
  background-size: cover;
  padding: 15px 20px;
  width: 100%;
  height: 130px;

  svg {
    max-width: 100px;
  }

  @media ${minDevice.laptop} {
    display: none;
  }
`
