import styled from 'styled-components'

export const Container = styled.aside`
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.bg_dark};
  width: ${({ theme }) => theme.l_aside_width};
  border-right: 1px solid ${({ theme }) => theme.border_color};
  box-sizing: border-box;
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
`
