import styled from 'styled-components'

export const Container = styled.aside`
  background: ${({ theme }) => theme.bg_dark};
  width: 320px;
  box-sizing: border-box;
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
`
