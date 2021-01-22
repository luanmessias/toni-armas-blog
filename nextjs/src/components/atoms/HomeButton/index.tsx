import React, { useState, useEffect } from 'react'
import HomeIconSVG from 'src/svg/Home'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Container } from './styles'

const HomeButton: React.FC = () => {
  const [isHomePage, setIsHomePage] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (router.pathname !== '/') {
      setIsHomePage(false)
    } else {
      setIsHomePage(true)
    }
  }, [router])

  return (
    <>
      <Container data-active={isHomePage}>
        <Link href="/">
          <a>
            <HomeIconSVG />
          </a>
        </Link>
      </Container>
    </>
  )
}

export default HomeButton
