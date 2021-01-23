import React from 'react'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import Theme from '@atoms/Theme'
import { DarkModeProvider } from '@context/DarkMode'
import GlobalNormalize from '@globalStyles/normalize'
import RightAside from '@organisms/RightAside'
import LeftAside from '@organisms/LeftAside'
import { SearchFormProvider } from '@context/SearchFrorm'
import GlobalStyles, { Main, Wrapper } from '../styles/global/global'

export default function MyApp({
  Component,
  pageProps,
  router
}: AppProps): JSX.Element {
  return (
    <DarkModeProvider>
      <Theme>
        <SearchFormProvider>
          <Wrapper>
            <LeftAside />
            <Main>
              <Component {...pageProps} key={router.route} />
            </Main>
            <RightAside />
          </Wrapper>
        </SearchFormProvider>
        <GlobalNormalize />
        <GlobalStyles />
      </Theme>
    </DarkModeProvider>
  )
}
