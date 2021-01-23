import styled from 'styled-components'

export const Container = styled.ul`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  margin-top: 40px;
`

export const MenuItem = styled.li`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: right;
  padding: 5px;
  width: 70%;

  svg {
    opacity: 0;
    fill: #fff;
    * {
      fill: #fff;
    }
  }

  &[data-active='true'],
  &:hover {
    background-color: ${({ theme }) => theme.color_orange_medium};
    svg {
      opacity: 1;
    }
  }

  a {
    font-family: 'Titillium Web', sans-serif;
    font-weight: 900;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 20px;
    color: ${({ theme }) => theme.txt_color_base};
  }
`
