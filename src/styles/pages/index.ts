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

export const PaginateContainer = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  .paginate {
    font-family: 'Titillium Web', sans-serif;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    list-style: none;

    li {
      background-color: ${({ theme }) => theme.borderColor};
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      cursor: pointer;
      margin: 0px 5px;
      border-radius: 5px;

      &:hover:not(.pagDisabled) {
        background-color: ${({ theme }) => theme.colorOrangeDark};
        transform: scale(1.1);
      }

      &.pagDisabled {
        opacity: 0.3;
        cursor: not-allowed;
      }

      &.pagActive {
        background-color: ${({ theme }) => theme.colorOrangeMedium};
      }

      a:active,
      a:focus {
        outline: 0;
        border: none;
        -moz-outline-style: none;
      }
    }
  }
`
