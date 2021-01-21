import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.bg_dark};
  border-bottom: 1px solid ${({ theme }) => theme.border_color};
  position: fixed;
  top: 0px;
  width: 100%;
  margin-left: ${({ theme }) => theme.l_aside_width};
  margin-right: ${({ theme }) => theme.r_aside_width};

  &[data-active='false'] {
    opacity: 0;
    transform: translateY(-100%);
    visibility: hidden;
  }

  &[data-active='true'] {
    opacity: 1;
    transform: translateY(0%);
    visibility: visible;
  }
`
