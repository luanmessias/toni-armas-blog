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
        <SocialLink href="#">
          <a target="_blank">
            <InstagramSVG />
          </a>
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink href="#">
          <a target="_blank">
            <YoutubeSVG />
          </a>
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink href="#">
          <a target="_blank">
            <TwitterSVG />
          </a>
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink href="#">
          <a target="_blank">
            <FacebookSVG />
          </a>
        </SocialLink>
      </SocialItem>
    </Container>
  )
}

export default SocialLinks
