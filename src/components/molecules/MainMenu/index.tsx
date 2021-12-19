import React, { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import TargetSVG from '@svg/Target'
import { useGetPageListContext } from '@context/GetPageList'
import { useMobileMenuContext } from '@context/MobileMenu'
import { Container, MenuItem } from './styles'

const MainMenu = (): React.ReactElement => {
  const { pageList } = useGetPageListContext()
  const { setMobileMenu } = useMobileMenuContext()

  const router = useRouter()
  const pageSlug = router.asPath.split('/').pop().split(';')[0]

  useEffect(() => {
    setMobileMenu(false)
  }, [router, setMobileMenu])

  const displayPages = pageList
    .filter(({ fields }: any) => fields.ativo === true)
    .slice(0)
    .reverse()
    .map(({ fields }: any, index) => {
      return (
        <MenuItem key={index} data-active={fields.slug === pageSlug}>
          <TargetSVG />
          <Link href={`/page/${fields.slug}`}>
            <a aria-label="Pagina principal" rel="noreferrer" href="/">
              {fields.titulo}
            </a>
          </Link>
        </MenuItem>
      )
    })

  return (
    <>
      <Container>
        <MenuItem data-active={router.pathname === '/'}>
          <TargetSVG />
          <Link href="/">
            <a aria-label="Pagina principal" rel="noreferrer" href="/">
              Home
            </a>
          </Link>
        </MenuItem>

        {displayPages}
      </Container>
    </>
  )
}

export default MainMenu
