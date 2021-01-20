import React from 'react'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import Theme from '@atoms/Theme'
import { DarkModeProvider } from '@context/DarkMode'
import GlobalNormalize from '../styles/global/normalize'
import GlobalStyles, { Main, Wrapper } from '../styles/global/global'
import ToggleThemeLamp from '../components/atoms/ToggleThemeLamp'

export default function MyApp({
  Component,
  pageProps,
  router
}: AppProps): JSX.Element {
  return (
    <DarkModeProvider>
      <Theme>
        <Main>
          <Wrapper>
            <Component {...pageProps} key={router.route} />
            <ToggleThemeLamp />
          </Wrapper>

          <GlobalNormalize />
          <GlobalStyles />
        </Main>
      </Theme>
    </DarkModeProvider>
  )
}
