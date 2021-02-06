import styled from 'styled-components'
import { maxDevice } from '@globalStyles/device'
export const Container = styled.div`
  padding: 15px;

  .notion {
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.txtColorBase};

    .notion-h1,
    .notion-h2,
    .notion-h3 {
      font-family: 'Titillium Web', sans-serif;
    }

    .notion-h1 {
      font-size: 4rem;
      @media ${maxDevice.tablet} {
        font-size: 3rem;
      }
    }

    .notion-h2 {
      margin-top: 20px;
      margin-bottom: 5px;
      font-size: 3rem;
      @media ${maxDevice.tablet} {
        font-size: 2rem;
      }
    }

    .notion-h2 {
      font-size: 2rem;
      @media ${maxDevice.tablet} {
        font-size: 1.5rem;
      }
    }

    .notion-text {
      font-family: 'Roboto', Arial, Helvetica, sans-serif;
      font-size: 1.25rem;

      a {
        color: ${({ theme }) => theme.colorOrangeMedium};
      }
    }

    .notion-quote {
      box-sizing: border-box;
      width: 100%;
      padding: 20px;
      margin: 15px 0px;
      border-left: 2px solid ${({ theme }) => theme.colorOrangeMedium};
      background-color: ${({ theme }) => theme.bgDark};
    }
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
