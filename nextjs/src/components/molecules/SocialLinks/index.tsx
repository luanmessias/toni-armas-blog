import FacebookSVG from '@svg/Facebook'
import InstagramSVG from '@svg/Instagram'
import YoutubeSVG from '@svg/Youtube'
import React from 'react'
import { Container, SocialItem, SocialLink } from './styles'

const SocialLinks = (): JSX.Element => {
  return (
    <Container>
      <SocialItem>
        <SocialLink href="https://www.instagram.com/canaltoniarmas/?hl=en">
          <a
            href="https://www.instagram.com/canaltoniarmas/?hl=en"
            aria-label="Instagram"
            rel="noreferrer"
            target="_blank"
          >
            <InstagramSVG />
          </a>
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink href="https://www.youtube.com/c/TONIARMAS">
          <a
            href="https://www.youtube.com/c/TONIARMAS"
            aria-label="YouTube"
            rel="noreferrer"
            target="_blank"
          >
            <YoutubeSVG />
          </a>
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink href="https://www.facebook.com/INSTRUTORTONIARMAS/">
          <a
            href="https://www.facebook.com/INSTRUTORTONIARMAS/"
            aria-label="Facebook"
            rel="noreferrer"
            target="_blank"
          >
            <FacebookSVG />
          </a>
        </SocialLink>
      </SocialItem>
    </Container>
  )
}

export default SocialLinks
