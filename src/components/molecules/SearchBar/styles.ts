import styled from 'styled-components'
import { maxDevice } from '@globalStyles/device'

export const Container = styled.div`
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.bgDark};
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  position: fixed;
  top: 0px;
  width: auto;
  width: 100%;
  padding: 20px;
  padding-left: calc(${({ theme }) => theme.LAsideWidth} + 20px);
  padding-right: calc(${({ theme }) => theme.RAsideWidth} + 20px);
  z-index: 1;

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

  @media ${maxDevice.laptop} {
    width: 100%;
    padding: 20px;
  }
`

export const SearchTitle = styled.h1`
  box-sizing: border-box;
  width: 100%;
  font-family: 'Titillium Web', sans-serif;
  font-weight: 400;
`

export const SearchInput = styled.input`
  padding: 10px;
  width: 100%;
  height: 45px;
  box-sizing: border-box;
  border: 0px;
  background-color: ${({ theme }) => theme.bgLight};
  color: ${({ theme }) => theme.txtColorBase};
`

export const SearchResultContainer = styled.div`
  box-sizing: border-box;
  max-height: 0px;
  opacity: 0;
  overflow-y: auto;
  visibility: hidden;

  &[data-active='true'] {
    padding: 10px;
    opacity: 1;
    max-height: 300px;
    visibility: visible;
    margin-top: 20px;
  }
`
