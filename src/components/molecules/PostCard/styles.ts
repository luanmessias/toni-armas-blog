import styled from 'styled-components'
import { minDevice, maxDevice } from '@globalStyles/device'

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.bgDark};
  padding: 25px;
  margin-bottom: 18px;
  width: 100%;

  @media ${`${minDevice.tablet} and ${maxDevice.laptopL}`} {
    width: calc((100% / 2) - 12px);
  }

  @media ${minDevice.laptopL} {
    width: calc((100% / 3) - 12px);
  }
`

export const CircleMask = styled.div`
  position: relative;
  width: 270px;
  height: 270px;
  overflow-x: hidden;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  margin-bottom: 30px;
`

export const PostDate = styled.div`
  font-family: 'Titillium Web', sans-serif;
  margin-bottom: 10px;
  font-size: 16px;
`

export const Title = styled.h2`
  font-family: 'Titillium Web', sans-serif;
  display: block;
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center;
  height: auto;
  min-height: 55px;
  text-transform: lowercase;
  &:first-letter {
    text-transform: uppercase;
  }
`

export const SmallDesc = styled.div`
  margin-bottom: 10px;
  font-size: 14px;
  text-align: center;
  max-width: 300px;
  display: block;
  height: auto;
  min-height: 35px;
  text-transform: lowercase;
  &:first-letter {
    text-transform: uppercase;
  }
`
export const ReadPostLink = styled.a`
  margin: 10px 0px;
  font-family: 'Titillium Web', sans-serif;
  color: #fff;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colorOrangeMedium};
  text-decoration: none;
  &:hover {
    background-color: ${({ theme }) => theme.colorOrangeDark};
    transform: scale(1.1);
  }
`
