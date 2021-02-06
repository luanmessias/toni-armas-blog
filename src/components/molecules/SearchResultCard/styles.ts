import styled from 'styled-components'
import { maxDevice } from '@globalStyles/device'

export const CircleMask = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  overflow-x: hidden;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  margin-right: 20px;

  @media ${maxDevice.laptop} {
    display: none;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const PostDate = styled.div`
  font-family: 'Titillium Web', sans-serif;
  font-size: 16px;
`

export const Title = styled.h2`
  font-family: 'Titillium Web', sans-serif;
  display: block;
  font-size: 24px;
  margin: 5px 0px;
  text-align: left;
  height: auto;
  text-transform: lowercase;
  &:first-letter {
    text-transform: uppercase;
  }
`

export const SmallDesc = styled.div`
  font-size: 14px;
  text-align: left;
  display: block;
  height: auto;
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
export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: left;
  background-color: ${({ theme }) => theme.bgDark};
  padding: 15px;
  margin-bottom: 18px;
  width: 100%;
  position: relative;

  &:hover {
    background-color: ${({ theme }) => theme.bgLight};

    ${CircleMask} {
      transform: scale(1.2);
    }
  }

  @media ${maxDevice.laptop} {
    flex-direction: column;
    margin: 0px;
    &:after {
      content: '';
      display: block;
      width: 100%;
      height: 1px;
      margin-top: 30px;
      background-color: ${({ theme }) => theme.bgLight};
    }
  }
`
