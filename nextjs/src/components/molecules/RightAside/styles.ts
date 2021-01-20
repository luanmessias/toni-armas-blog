import styled from 'styled-components'

export const Container = styled.aside<any>`
  box-sizing: border-box;
  border-left: 1px solid ${({ theme }) => theme.border_color};
  background: ${({ theme }) => theme.bg_dark};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  > div {
    > div {
      padding: 10px 20px;
    }
  }
`
