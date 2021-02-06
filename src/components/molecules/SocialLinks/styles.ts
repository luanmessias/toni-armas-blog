import styled from 'styled-components'
import Link from 'next/link'

export const Container = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`
export const SocialItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.txtColorDark};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 5px;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colorOrangeMedium};
  }
`

export const SocialLink = styled(Link)`
  text-decoration: none;
`
