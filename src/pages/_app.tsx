import React from 'react'
import Router, { AppProps } from 'next/dist/next-server/lib/router/router'
import NProgress from 'nprogress'
import { DarkModeProvider } from '@context/DarkMode'
import { SearchFormProvider } from '@context/SearchFrorm'
import { MobileMenuProvider } from '@context/MobileMenu'
import { GetPostListProvider } from '@context/GetPostList'
import Theme from '@atoms/Theme'
import HeaderMobile from '@molecules/HeaderMobile'
import RightAside from '@organisms/RightAside'
import LeftAside from '@organisms/LeftAside'
import HeadApp from '@organisms/HeadApp'
import GlobalNormalize from '@globalStyles/normalize'
import GlobalStyles, { Main } from '../styles/global/global'
import { NProgressStyle } from '@globalStyles/nprogress'

Router.events.on('routeChangeStart', url => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})

Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

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
          <GetPostListProvider>
            <SearchFormProvider>
              <MobileMenuProvider>
                <HeaderMobile />
                <LeftAside />
              </MobileMenuProvider>
              <Main>
                <Component {...pageProps} key={router.route} />
              </Main>
              <RightAside />
            </SearchFormProvider>
          </GetPostListProvider>
          <GlobalNormalize />
          <GlobalStyles />
          <NProgressStyle />
        </Theme>
      </DarkModeProvider>
    </>
  )
}
