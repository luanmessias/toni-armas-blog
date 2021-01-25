import React from 'react'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { ApolloProvider } from '@apollo/client'
import { Container } from './styles'

type ChildrenProps = {
  children: React.ReactNode
}

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
})

const ApolloWrapper = ({ children }: ChildrenProps): JSX.Element => {
  return (
    <Container>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </Container>
  )
}

export default ApolloWrapper
