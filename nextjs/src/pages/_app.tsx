import React from 'react'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import Theme from '@atoms/Theme'
import { DarkModeProvider } from '@context/DarkMode'
import GlobalNormalize from '@globalStyles/normalize'
import RightAside from '@organisms/RightAside'
import LeftAside from '@organisms/LeftAside'
import { SearchFormProvider } from '@context/SearchFrorm'
import HeaderMobile from '@molecules/HeaderMobile'
import { MobileMenuProvider } from '@context/MobileMenu'
import HeadApp from '@organisms/HeadApp'
import GlobalStyles, { Main, Wrapper } from '../styles/global/global'

export default function MyApp({
  Component,
  pageProps,
  router
}: AppProps): JSX.Element {
  return (
    <>
      <HeadApp />
      <DarkModeProvider>
        <Theme>
          <SearchFormProvider>
            <Wrapper>
              <MobileMenuProvider>
                <HeaderMobile />
                <LeftAside />
              </MobileMenuProvider>
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
    </>
  )
}
