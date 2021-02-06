import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import { Container } from './styles'

type ChildrenProps = {
  children: React.ReactNode
}

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
})

const ApolloWrapper = ({ children }: ChildrenProps): React.ReactElement => {
  return (
    <Container>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </Container>
  )
}

export default ApolloWrapper
