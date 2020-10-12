import ButtonLink from 'components/ButtonLink'
import { Container } from 'components/Container'
import Heading from 'components/Heading'
import Main from 'components/Main'
import { LandingPageProps } from 'types/api'

import * as S from './styles'

const Home = ({
  sectionHeader,
  sectionPublic,
  sectionSocial
}: LandingPageProps) => (
  <Container>
    <Main {...sectionHeader} />

    <S.SectionLinks>
      <Heading lineLeft lineColor="secondary">
        {sectionSocial.title}
      </Heading>

      {sectionSocial.socialLinks.map((link) => (
        <ButtonLink
          key={link.buttonLabel}
          buttonLabel={link.buttonLabel}
          buttonLink={link.buttonLink}
        />
      ))}
    </S.SectionLinks>

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
  </Container>
)

export default Home
