import { Linkedin, Github, Twitter } from '@styled-icons/boxicons-logos'

import ButtonLink, { ButtonLinkProps } from 'components/ButtonLink'
import { Container } from 'components/Container'
import Heading from 'components/Heading'
import Main from 'components/Main'

import * as S from './styles'

export type HomeTemplateProps = {
  links?: ButtonLinkProps[]
}

const icons = {
  github: <Github />,
  linkedin: <Linkedin />,
  twitter: <Twitter />
}

const Home = ({ links }: HomeTemplateProps) => (
  <Container>
    <Main />

    <S.SectionLinks>
      <Heading lineLeft lineColor="secondary">
        Links I find interesting
      </Heading>

      {links!
        .filter((links) => {
          return links.category === 'Social'
        })
        .map((link) => (
          <ButtonLink
            key={link.buttonLabel}
            buttonLabel={link.buttonLabel}
            buttonLink={link.buttonLink}
          ></ButtonLink>
        ))}
    </S.SectionLinks>

    <S.SectionLinks>
      <Heading lineLeft lineColor="secondary">
        My social medias
      </Heading>

      {links!
        .filter((links) => {
          return links.category === 'Public'
        })
        .map((link) => (
          <ButtonLink
            key={link.buttonLabel}
            buttonLabel={link.buttonLabel}
            buttonLink={link.buttonLink}
            icon={icons[link.icon]}
          />
        ))}
    </S.SectionLinks>
  </Container>
)

export default Home
