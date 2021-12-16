import styled from 'styled-components'
import { maxDevice } from '@globalStyles/device'

export const Container = styled.div``

export const PostContainer = styled.div`
  padding: 15px;
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.txtColorBase};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Titillium Web', sans-serif;
  }

  h1 {
    font-size: 4rem;
    @media ${maxDevice.tablet} {
      font-size: 3rem;
    }
  }

  h2 {
    margin-top: 20px;
    margin-bottom: 5px;
    font-size: 3rem;
    @media ${maxDevice.tablet} {
      font-size: 2rem;
    }
  }

  h3 {
    font-size: 2rem;
    @media ${maxDevice.tablet} {
      font-size: 1.5rem;
    }
  }

  p {
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    font-size: 1.5rem;
    margin: 15px 0px;
  }

  a,
  strong {
    color: ${({ theme }) => theme.colorOrangeMedium};
  }

  @media ${maxDevice.laptop} {
    padding-bottom: 100px;
  }
`

export const PostHeder = styled.div`
  padding: 120px 30px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    top: 0px;
    left: 0px;
  }

  @media ${maxDevice.laptop} {
    padding: 90px 30px 30px 30px;
  }
`

export const PostHeaderContent = styled.div`
  position: relative;
  z-index: 1;
  color: #fff;
`

export const PostDate = styled.span`
  color: ${({ theme }) => theme.colorOrangeMedium};
`

export const PostTitle = styled.h1`
  font-family: 'Titillium Web', sans-serif;
  text-transform: uppercase;
  font-size: 40px;
  @media ${maxDevice.tablet} {
    font-size: 30px;
  }
`

export const PostDesc = styled.p`
  font-size: 18px;
`
export const VideoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 100px;
`
export const VideoContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: calc(100% - 40px);

  &:after {
    padding-top: 56.25%;
    display: block;
    content: '';
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`
