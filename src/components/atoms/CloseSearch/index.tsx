import React from 'react'
import { Container } from './styles'
import CloseSVG from '@svg/Close'
import { useSearchFormContext } from '@context/SearchFrorm'

const CloseSearch = () => {
  const { setSearchForm } = useSearchFormContext()

  return (
    <>
      <Container onClick={() => setSearchForm(false)}>
        <CloseSVG />
      </Container>
    </>
  )
}

export default CloseSearch
