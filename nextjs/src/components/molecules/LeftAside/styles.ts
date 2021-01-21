import styled from 'styled-components'

export const Container = styled.aside`
  background: ${({ theme }) => theme.bg_dark};
  width: ${({ theme }) => theme.l_aside_width};
  border-right: 1px solid ${({ theme }) => theme.border_color};
  box-sizing: border-box;
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
`
