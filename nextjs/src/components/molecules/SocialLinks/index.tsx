import FacebookSVG from '@svg/Facebook'
import InstagramSVG from '@svg/Instagram'
import TwitterSVG from '@svg/Twitter'
import YoutubeSVG from '@svg/Youtube'
import React from 'react'
import { Container, SocialItem, SocialLink } from './styles'

const SocialLinks: React.FC = () => {
  return (
    <Container>
      <SocialItem>
        <SocialLink href="https://www.instagram.com/canaltoniarmas/?hl=en">
          <a rel="noreferrer" target="_blank">
            <InstagramSVG />
          </a>
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink href="https://www.youtube.com/c/TONIARMAS">
          <a rel="noreferrer" target="_blank">
            <YoutubeSVG />
          </a>
        </SocialLink>
      </SocialItem>
      {/* <SocialItem>
        <SocialLink href="#">
          <a target="_blank">
            <TwitterSVG />
          </a>
        </SocialLink>
      </SocialItem> */}
      <SocialItem>
        <SocialLink href="https://www.facebook.com/INSTRUTORTONIARMAS/">
          <a rel="noreferrer" target="_blank">
            <FacebookSVG />
          </a>
        </SocialLink>
      </SocialItem>
    </Container>
  )
}

export default SocialLinks
