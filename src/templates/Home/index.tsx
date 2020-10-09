import ButtonLink, { ButtonLinkProps } from 'components/ButtonLink'
import { Container } from 'components/Container'
import Heading from 'components/Heading'
import Main from 'components/Main'

import { Linkedin, Github, Twitter } from '@styled-icons/boxicons-logos'

import * as S from './styles'

export type HomeTemplateProps = {
  links: ButtonLinkProps[]
}

const icons = {
  Github: <Github />,
  Linkedin: <Linkedin />,
  Twitter: <Twitter />
}

const Home = ({ links }: HomeTemplateProps) => (
  <Container>
    <Main />

    <S.SectionLinks>
      <Heading lineLeft lineColor="secondary">
        Meus
      </Heading>

      {links
        .filter((links) => {
          return links.category === 'Social'
        })
        .map((link, index) => (
          <ButtonLink
            key={index}
            buttonLabel={link.buttonLabel}
            buttonLink={link.buttonLink}
          />
        ))}
    </S.SectionLinks>

    <S.SectionLinks>
      <Heading lineLeft lineColor="secondary">
        Redes
      </Heading>

      <ButtonLink buttonLabel="teste" buttonLink="/teste" icon={<Linkedin />} />

      <ButtonLink buttonLabel="teste" buttonLink="/teste" icon={<Github />} />
    </S.SectionLinks>
  </Container>
)

export default Home
