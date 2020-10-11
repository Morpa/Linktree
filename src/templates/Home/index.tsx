import { Linkedin, Github, Twitter } from '@styled-icons/boxicons-logos'

import ButtonLink from 'components/ButtonLink'
import { Container } from 'components/Container'
import Heading from 'components/Heading'
import Main from 'components/Main'
import { LandingPageProps } from 'types/api'

import * as S from './styles'

const icons = {
  Github: <Github />,
  Linkedin: <Linkedin />,
  Twitter: <Twitter />
}

const Home = ({
  sectionHeader,
  sectionPublic,
  sectionSocial
}: LandingPageProps) => (
  <Container>
    <Main {...sectionHeader} />

    <S.SectionLinks>
      <Heading lineLeft lineColor="secondary">
        {sectionPublic.title}
      </Heading>

      {sectionPublic.publicLinks.map((link) => (
        <ButtonLink
          key={link.buttonLabel}
          buttonLabel={link.buttonLabel}
          buttonLink={link.buttonLink}
        />
      ))}
    </S.SectionLinks>

    <S.SectionLinks>
      <Heading lineLeft lineColor="secondary">
        {sectionSocial.title}
      </Heading>

      {sectionSocial.socialLinks.map((link) => (
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
